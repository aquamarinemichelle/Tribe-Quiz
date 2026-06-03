/**
 * UBUNTU QUIZ — GAME LOGIC
 * Handles: screen navigation, culture card building,
 * question loading, answering, scoring, and results.
 */

/* ── STATE ── */
let currentCultureKey = null;
let questions          = [];
let currentIndex       = 0;
let score              = 0;
let totalPoints        = 0;
let answered           = false;
let answerLog          = [];

/* ── CONSTANTS ── */
const POINTS_PER_CORRECT = 10;
const MAX_QUESTIONS       = 10;

/* ── DOM REFERENCES ── */
const screens = {
  home:    document.getElementById('screen-home'),
  quiz:    document.getElementById('screen-quiz'),
  results: document.getElementById('screen-results'),
};

const el = {
  cultureGrid:      document.getElementById('culture-grid'),
  quizCultureLabel: document.getElementById('quiz-culture-label'),
  liveScore:        document.getElementById('live-score'),
  progressBar:      document.getElementById('progress-bar'),
  qCategory:        document.getElementById('q-category'),
  qCounter:         document.getElementById('q-counter'),
  qText:            document.getElementById('q-text'),
  questionImg:      document.getElementById('question-img'),
  optionsGrid:      document.getElementById('options-grid'),
  feedbackBar:      document.getElementById('feedback-bar'),
  nextBtn:          document.getElementById('next-btn'),
  resultsMedal:     document.getElementById('results-medal'),
  resultsTitle:     document.getElementById('results-title'),
  resultsScoreBig:  document.getElementById('results-score-big'),
  resultsPctBar:    document.getElementById('results-pct-bar'),
  resultsMsg:       document.getElementById('results-msg'),
  breakdownList:    document.getElementById('breakdown-list'),
  playAgainBtn:     document.getElementById('play-again-btn'),
  changeCultureBtn: document.getElementById('change-culture-btn'),
  backBtn:          document.getElementById('back-btn'),
};

/* ══════════════════════════════════════
   SCREEN NAVIGATION
══════════════════════════════════════ */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}

/* ══════════════════════════════════════
   BUILD CULTURE CARDS ON HOME SCREEN
   Cards now have: image/icon on top, name,
   language, and a PLAY NOW button — just
   like the screenshot you shared.
══════════════════════════════════════ */
function buildCultureGrid() {
  el.cultureGrid.innerHTML = '';

  Object.entries(CULTURES).forEach(([key, culture]) => {

    /* Outer card */
    const card = document.createElement('div');
    card.className = 'culture-card' + (culture.locked ? ' locked' : '');

    /* ── Top image / icon area ── */
    const isImagePath = culture.icon && (
      culture.icon.endsWith('.png')  ||
      culture.icon.endsWith('.jpg')  ||
      culture.icon.endsWith('.jpeg') ||
      culture.icon.endsWith('.gif')  ||
      culture.icon.endsWith('.svg')  ||
      culture.icon.endsWith('.webp')
    );

    let topHtml = '';
    if (isImagePath) {
      /* Use the image file, fall back to emoji if it fails to load */
      const fallback = culture.iconFallback || '📚';
      topHtml = `
        <div class="culture-icon-wrapper">
          <img
            class="culture-icon-img"
            src="${culture.icon}"
            alt="${culture.name}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
          />
          <span class="culture-icon" style="display:none;">${fallback}</span>
        </div>`;
    } else {
      /* Just an emoji */
      topHtml = `
        <div class="culture-icon-wrapper">
          <span class="culture-icon">${culture.icon || '📚'}</span>
        </div>`;
    }

    /* ── Play / locked button ── */
    const btnHtml = culture.locked
      ? `<button class="culture-play-btn play-btn-locked" disabled>Coming Soon</button>`
      : `<button class="culture-play-btn play-btn-active">PLAY NOW</button>`;

    /* ── Assemble card ── */
    card.innerHTML = `
      ${topHtml}
      <div class="culture-card-body">
        <span class="culture-name">${culture.name}</span>
        <span class="culture-lang">${culture.lang}</span>
        ${btnHtml}
      </div>
    `;

    /* Click anywhere on unlocked card starts quiz */
    if (!culture.locked) {
      card.addEventListener('click', () => startQuiz(key));
    }

    el.cultureGrid.appendChild(card);
  });
}

/* ══════════════════════════════════════
   START QUIZ
══════════════════════════════════════ */
function startQuiz(cultureKey) {
  const culture = CULTURES[cultureKey];
  if (!culture || culture.locked || culture.questions.length === 0) return;

  currentCultureKey = cultureKey;
  questions  = shuffle([...culture.questions]).slice(0, MAX_QUESTIONS);
  currentIndex = 0;
  score        = 0;
  totalPoints  = 0;
  answered     = false;
  answerLog    = [];

  /* Show emoji in quiz header (not image path) */
  const isImagePath = culture.icon && culture.icon.includes('.');
  const displayIcon = isImagePath ? (culture.iconFallback || '🌍') : (culture.icon || '🌍');
  el.quizCultureLabel.textContent = displayIcon + ' ' + culture.name;
  el.liveScore.textContent = '0 pts';

  showScreen('quiz');
  loadQuestion();
}

/* ══════════════════════════════════════
   LOAD QUESTION
══════════════════════════════════════ */
function loadQuestion() {
  const q     = questions[currentIndex];
  const total = questions.length;
  answered    = false;

  el.qCategory.textContent = q.cat;
  el.qCounter.textContent  = (currentIndex + 1) + ' / ' + total;
  el.qText.textContent     = q.q;

  /* Progress bar */
  el.progressBar.style.width = ((currentIndex / total) * 100) + '%';

  /* Reset feedback + next btn */
  el.feedbackBar.className   = 'feedback-bar';
  el.feedbackBar.textContent = '';
  el.nextBtn.style.display   = 'none';
  el.nextBtn.textContent     = currentIndex === total - 1
    ? 'See my results 🏆'
    : 'Next question →';

  /* Question image */
  if (q.img && q.img.trim() !== '' && q.img !== null) {
    el.questionImg.src = q.img;
    el.questionImg.style.display = 'block';
    el.questionImg.onerror = () => {
      el.questionImg.style.display = 'none';
    };
  } else {
    el.questionImg.style.display = 'none';
    el.questionImg.src = '';
  }

  renderOptions(q);
}

/* ══════════════════════════════════════
   RENDER ANSWER BUTTONS
══════════════════════════════════════ */
function renderOptions(q) {
  el.optionsGrid.innerHTML = '';

  const options = q.opts.map((text, origIndex) => ({ text, origIndex }));
  const shuffled = shuffle(options);

  shuffled.forEach(opt => {
    const btn = document.createElement('button');
    btn.className   = 'opt-btn';
    btn.textContent = opt.text;
    btn.addEventListener('click', () => {
      handleAnswer(btn, opt.origIndex, q.ans, q.q, q.opts[q.ans], shuffled);
    });
    el.optionsGrid.appendChild(btn);
  });
}

/* ══════════════════════════════════════
   HANDLE ANSWER
══════════════════════════════════════ */
function handleAnswer(clickedBtn, chosenIndex, correctIndex, questionText, correctText, shuffled) {
  if (answered) return;
  answered = true;

  const allBtns = el.optionsGrid.querySelectorAll('.opt-btn');
  allBtns.forEach(b => (b.disabled = true));

  const isCorrect = chosenIndex === correctIndex;

  if (isCorrect) {
    score++;
    totalPoints += POINTS_PER_CORRECT;
    clickedBtn.classList.add('correct');
    showFeedback(true, '✓ Correct! Well done!');
  } else {
    clickedBtn.classList.add('wrong');
    allBtns.forEach(b => {
      const match = shuffled.find(s => s.text === b.textContent);
      if (match && match.origIndex === correctIndex) b.classList.add('correct');
    });
    showFeedback(false, '✗ Incorrect. Correct answer: ' + correctText);
  }

  el.liveScore.textContent = totalPoints + ' pts';

  answerLog.push({
    question:      questionText,
    yourAnswer:    clickedBtn.textContent,
    correctAnswer: correctText,
    correct:       isCorrect,
  });

  el.nextBtn.style.display = 'block';
}

function showFeedback(isCorrect, message) {
  el.feedbackBar.textContent = message;
  el.feedbackBar.className   = 'feedback-bar show ' + (isCorrect ? 'correct' : 'wrong');
}

/* ══════════════════════════════════════
   NEXT BUTTON
══════════════════════════════════════ */
el.nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= questions.length) {
    showResults();
  } else {
    loadQuestion();
  }
});

/* ══════════════════════════════════════
   RESULTS SCREEN (with SVG icons instead of emojis)
══════════════════════════════════════ */
function showResults() {
  const total   = questions.length;
  const pct     = Math.round((score / total) * 100);
  const culture = CULTURES[currentCultureKey];

  // Set medal level and title icon based on score
  let medalLevel, titleIconClass, titleText, msg;
  
  if (pct >= 90) {
    medalLevel = 'gold';
    titleIconClass = 'chief';
    titleText = 'Inkosi! (Chief!)';
    msg = 'Incredible knowledge of ' + culture.name + ' culture!';
  } else if (pct >= 70) {
    medalLevel = 'silver';
    titleIconClass = 'excellent';
    titleText = 'Excellent!';
    msg = 'Outstanding knowledge of ' + culture.name + ' culture!';
  } else if (pct >= 50) {
    medalLevel = 'bronze';
    titleIconClass = 'good';
    titleText = 'Good effort!';
    msg = 'Decent knowledge — keep exploring ' + culture.name + ' culture.';
  } else {
    medalLevel = 'leaf';
    titleIconClass = 'learning';
    titleText = 'Keep learning!';
    msg = 'There\'s lots more to discover about ' + culture.name + ' culture!';
  }

  // Set medal with data attribute (CSS will show SVG)
  el.resultsMedal.setAttribute('data-level', medalLevel);
  el.resultsMedal.textContent = '';  // Clear emoji text
  
  // Set title with icon + text
  el.resultsTitle.innerHTML = `<span class="results-title-icon ${titleIconClass}"></span> ${titleText}`;
  el.resultsScoreBig.textContent = score + ' / ' + total;
  el.resultsMsg.textContent = msg;

  // Animate percentage bar
  el.resultsPctBar.style.width = '0%';
  setTimeout(() => {
    el.resultsPctBar.style.width = pct + '%';
  }, 100);

  // Fill in breakdown
  el.breakdownList.innerHTML = answerLog.map(entry => `
    <div class="breakdown-row ${entry.correct ? 'ok' : 'bad'}">
      <span class="bd-q">
        ${truncate(entry.question, 52)}
        ${!entry.correct ? '<span class="bd-correct-ans">✓ ' + entry.correctAnswer + '</span>' : ''}
      </span>
      ${entry.correct
        ? '<span class="bd-result-correct">✓</span>'
        : '<span class="bd-result-wrong">✗</span>'}
    </div>
  `).join('');

  el.progressBar.style.width = '100%';
  showScreen('results');
}

/* ══════════════════════════════════════
   BUTTON LISTENERS
══════════════════════════════════════ */
el.playAgainBtn.addEventListener('click',     () => startQuiz(currentCultureKey));
el.changeCultureBtn.addEventListener('click', () => showScreen('home'));
el.backBtn.addEventListener('click', () => {
  if (confirm('Go back to the home screen? Your progress will be lost.')) {
    showScreen('home');
  }
});

/* ══════════════════════════════════════
   UTILITIES
══════════════════════════════════════ */
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function truncate(str, maxLen) {
  return str.length > maxLen ? str.slice(0, maxLen) + '…' : str;
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
buildCultureGrid();
showScreen('home');