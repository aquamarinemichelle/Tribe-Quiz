/**
 * UBUNTU QUIZ — LEADERBOARD
 * Fetches and displays top scores from Supabase with actual usernames from profiles table
 */

/* ── DOM Elements ── */
let leaderboardData = [];
let currentCulture = 'all';
let currentSort = 'score';

/* ── Initialize Leaderboard ── */
async function initLeaderboard() {
  console.log('🏆 Initializing leaderboard...');
  await loadLeaderboard();
  setupEventListeners();
}

/* ── Load Scores from Supabase ── */
async function loadLeaderboard() {
  const container = document.getElementById('leaderboard-list');
  if (!container) {
    console.warn('⚠️ Leaderboard container not found');
    return;
  }

  // Show loading state
  container.innerHTML = `
    <div class="leaderboard-loading">
      <div class="loading-spinner"></div>
      <p>Loading scores...</p>
    </div>
  `;

  try {
    // Check if _supabase is available
    if (typeof _supabase === 'undefined') {
      throw new Error('Supabase not initialized');
    }

    // Check if user is logged in
    const { data: { session } } = await _supabase.auth.getSession();
    if (!session) {
      container.innerHTML = `
        <div class="leaderboard-empty">
          <span class="empty-icon">🔒</span>
          <p>Please sign in to view the leaderboard</p>
          <button class="btn-start" onclick="window.location.href='auth.html'">Sign In</button>
        </div>
      `;
      return;
    }

    console.log('📊 Fetching scores...');
    
    // Fetch scores
    const { data: scoresData, error: scoresError } = await _supabase
      .from('scores')
      .select('*')
      .order('score', { ascending: false })
      .limit(100);

    if (scoresError) {
      console.error('❌ Error fetching scores:', scoresError);
      throw scoresError;
    }

    console.log(`📊 Found ${scoresData?.length || 0} scores`);

    if (!scoresData || scoresData.length === 0) {
      container.innerHTML = `
        <div class="leaderboard-empty">
          <span class="empty-icon">🏆</span>
          <p>No scores yet. Be the first to play!</p>
          <button class="btn-start" onclick="window.location.href='index.html'">Play Now</button>
        </div>
      `;
      return;
    }

    // Get all unique user IDs from scores
    const userIds = [...new Set(scoresData.map(d => d.user_id).filter(id => id))];
    console.log(`👤 Fetching profiles for ${userIds.length} users...`);

    // Fetch profiles for all users who have scores
    const { data: profilesData, error: profilesError } = await _supabase
      .from('profiles')
      .select('id, display_name')
      .in('id', userIds);

    if (profilesError) {
      console.warn('⚠️ Could not fetch profiles:', profilesError);
    }

    // Create a user map for quick lookup
    const userMap = {};
    if (profilesData) {
      profilesData.forEach(profile => {
        userMap[profile.id] = profile.display_name || 'Player';
      });
    }

    // For users without profiles, use a fallback
    scoresData.forEach(entry => {
      if (!userMap[entry.user_id]) {
        // If we don't have a profile, use email or fallback
        // For current user, try to get from session
        if (entry.user_id === session.user.id) {
          userMap[entry.user_id] = session.user.user_metadata?.display_name || 
                                   session.user.email?.split('@')[0] || 
                                   `Player ${entry.user_id.substring(0, 8)}`;
        } else {
          userMap[entry.user_id] = `Player ${entry.user_id.substring(0, 8)}`;
        }
      }
    });

    // Process data with user names
    const dataWithNames = scoresData.map(entry => ({
      ...entry,
      userName: userMap[entry.user_id] || `Player ${entry.user_id.substring(0, 8)}`
    }));

    leaderboardDataRaw = dataWithNames;
    renderLeaderboard(processScores(dataWithNames));

  } catch (err) {
    console.error('❌ Error loading leaderboard:', err);
    container.innerHTML = `
      <div class="leaderboard-error">
        <span class="error-icon">⚠️</span>
        <p>Failed to load leaderboard. Please try again later.</p>
        <p style="font-size:0.8rem;color:var(--muted);margin-top:0.5rem;">${err.message}</p>
        <button class="btn-retry" onclick="initLeaderboard()">Retry</button>
      </div>
    `;
  }
}

/* ── Process Scores (best score per user per culture) ── */
function processScores(data) {
  const userBest = new Map();

  data.forEach(entry => {
    const userName = entry.userName || 'Player';
    const userId = entry.user_id;
    const percentage = Math.round((entry.score / entry.total) * 100);
    
    const key = `${userId}_${entry.culture}`;
    
    if (!userBest.has(key) || userBest.get(key).score < entry.score) {
      userBest.set(key, {
        userId: userId,
        userName: userName,
        culture: entry.culture,
        score: entry.score,
        total: entry.total,
        percentage: percentage,
        date: new Date(entry.created_at).toLocaleDateString()
      });
    }
  });

  let results = Array.from(userBest.values());
  
  if (currentCulture !== 'all') {
    results = results.filter(r => r.culture.toLowerCase() === currentCulture.toLowerCase());
  }
  
  results.sort((a, b) => {
    if (currentSort === 'score') return b.score - a.score;
    if (currentSort === 'percentage') return b.percentage - a.percentage;
    if (currentSort === 'date') return new Date(b.date) - new Date(a.date);
    return 0;
  });
  
  return results;
}

/* ── Render Leaderboard ── */
function renderLeaderboard(data) {
  const container = document.getElementById('leaderboard-list');
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `
      <div class="leaderboard-empty">
        <span class="empty-icon">🏆</span>
        <p>No scores yet. Be the first to play!</p>
        <button class="btn-start" onclick="window.location.href='index.html'">Play Now</button>
      </div>
    `;
    return;
  }

  const html = `
    <div class="leaderboard-table-wrapper">
      <table class="leaderboard-table">
        <thead>
          <tr>
            <th class="rank-col">#</th>
            <th class="player-col">Player</th>
            <th class="culture-col">Culture</th>
            <th class="score-col">
              <button class="sort-btn ${currentSort === 'score' ? 'active' : ''}" data-sort="score">
                Score ⬍
              </button>
            </th>
            <th class="pct-col">
              <button class="sort-btn ${currentSort === 'percentage' ? 'active' : ''}" data-sort="percentage">
                % ⬍
              </button>
            </th>
            <th class="date-col">
              <button class="sort-btn ${currentSort === 'date' ? 'active' : ''}" data-sort="date">
                Date ⬍
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          ${data.map((entry, index) => `
            <tr class="${index < 3 ? 'top-three' : ''}">
              <td class="rank-cell">
                ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : (index + 1)}
              </td>
              <td class="player-cell">
                <span class="player-name">${escapeHtml(entry.userName)}</span>
              </td>
              <td class="culture-cell">
                <span class="culture-badge">${escapeHtml(entry.culture)}</span>
              </td>
              <td class="score-cell">${entry.score} / ${entry.total}</td>
              <td class="pct-cell">
                <div class="pct-bar-container">
                  <div class="pct-bar" style="width: ${entry.percentage}%"></div>
                  <span class="pct-value">${entry.percentage}%</span>
                </div>
              </td>
              <td class="date-cell">${entry.date}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  
  container.innerHTML = html;
  
  // Reattach sort button listeners
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentSort = btn.dataset.sort;
      renderLeaderboard(processScores(leaderboardDataRaw));
    });
  });
}

/* ── Save Score After Quiz ── */
async function saveScore(culture, score, total) {
  console.log('📊 saveScore called:', { culture, score, total });
  
  if (typeof _supabase === 'undefined') {
    console.warn('⚠️ Supabase not available');
    return false;
  }
  
  const { data: { session } } = await _supabase.auth.getSession();
  if (!session) {
    console.warn('⚠️ User not logged in - score not saved');
    alert('Please sign in to save your score to the leaderboard!');
    return false;
  }
  
  console.log('👤 Saving score for user:', session.user.id, '| culture:', JSON.stringify(culture));
  
  try {
    const { data, error } = await _supabase
      .from('scores')
      .insert({
        user_id: session.user.id,
        culture: culture,
        score: score,
        total: total
      });
    
    if (error) {
      console.error('❌ Supabase error:', error);
      throw error;
    }
    
    console.log('✅ Score saved successfully!', { culture, score, total });
    return true;
  } catch (err) {
    console.error('❌ Error saving score:', err);
    return false;
  }
}

/* ── Helper Functions ── */
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// Store raw data for filtering
let leaderboardDataRaw = [];

// Setup event listeners
function setupEventListeners() {
  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentCulture = this.dataset.culture === 'all' ? 'all' : this.dataset.culture;
      renderLeaderboard(processScores(leaderboardDataRaw));
    });
  });
}

/* ── Expose functions globally ── */
window.initLeaderboard = initLeaderboard;
window.saveScore = saveScore;