/**
 * UBUNTU QUIZ — GAME LOGIC
 * ══════════════════════════════════════════════════════════
 * Handles: screen navigation, question loading, answering,
 * scoring, progress bar, results screen, and QUESTION IMAGES.
 * ══════════════════════════════════════════════════════════
 */

/* ── STATE ───────────────────────────── */
let currentCultureKey = null;   // e.g. "zulu"
let questions          = [];    // shuffled question list for this session
let currentIndex       = 0;    // which question we're on
let score              = 0;    // correct answers this session
let totalPoints        = 0;    // cumulative points across sessions
let answered           = false; // has the user answered the current question?
let answerLog          = [];    // [{q, yourAnswer, correctAnswer, correct: bool}]

/* ── CONSTANTS ───────────────────────── */
const POINTS_PER_CORRECT = 10;
const MAX_QUESTIONS       = 10; // how many questions to pick per round

/* ── DOM REFERENCES ──────────────────── */
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
   HOME SCREEN — BUILD CULTURE GRID
══════════════════════════════════════ */
function buildCultureGrid() {
  el.cultureGrid.innerHTML = '';

  Object.entries(CULTURES).forEach(([key, culture]) => {
    const card = document.createElement('div');
    card.className = 'culture-card' + (culture.locked ? ' locked' : '');

    const badgeHtml = culture.locked
      ? '<span class="culture-badge badge-soon">Coming soon</span>'
      : '<span class="culture-badge badge-ready">▶ Play</span>';

    card.innerHTML = `
      <span class="culture-icon">${culture.icon}</span>
      <span class="culture-name">${culture.name}</span>
      <span class="culture-lang">${culture.lang}</span>
      ${badgeHtml}
    `;

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

  // Shuffle questions and take up to MAX_QUESTIONS
  questions = shuffle([...culture.questions]).slice(0, MAX_QUESTIONS);

  currentIndex = 0;
  score        = 0;
  totalPoints  = 0;
  answered     = false;
  answerLog    = [];

  el.quizCultureLabel.textContent = culture.icon + ' ' + culture.name;
  el.liveScore.textContent        = '0 pts';

  showScreen('quiz');
  loadQuestion();
}

/* ══════════════════════════════════════
   LOAD QUESTION (with image support)
══════════════════════════════════════ */
function loadQuestion() {
  const q     = questions[currentIndex];
  const total = questions.length;
  answered    = false;

  // Update meta info
  el.qCategory.textContent = q.cat;
  el.qCounter.textContent  = (currentIndex + 1) + ' / ' + total;
  el.qText.textContent     = q.q;

  // Progress bar (shows progress into current question)
  const pct = (currentIndex / total) * 100;
  el.progressBar.style.width = pct + '%';

  // Reset feedback + next button
  el.feedbackBar.className   = 'feedback-bar';
  el.feedbackBar.textContent = '';
  el.nextBtn.style.display   = 'none';
  el.nextBtn.textContent     = currentIndex === total - 1
    ? 'See my results 🏆'
    : 'Next question →';

  // ⭐ HANDLE QUESTION IMAGE ⭐
  if (q.img && q.img.trim() !== '') {
    el.questionImg.src = q.img;
    el.questionImg.style.display = 'block';
    // If image fails to load, hide it gracefully
    el.questionImg.onerror = () => {
      el.questionImg.style.display = 'none';
    };
  } else {
    el.questionImg.style.display = 'none';
    el.questionImg.src = '';
  }

  // Build answer buttons
  renderOptions(q);
}

/* ── RENDER OPTION BUTTONS ───────────── */
function renderOptions(q) {
  el.optionsGrid.innerHTML = '';

  // Attach the original index to each option so we can check correctness
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
    // Highlight the correct button
    allBtns.forEach(b => {
      const match = shuffled.find(s => s.text === b.textContent);
      if (match && match.origIndex === correctIndex) {
        b.classList.add('correct');
      }
    });
    showFeedback(false, '✗ Incorrect. The correct answer was: ' + correctText);
  }

  // Update live score
  el.liveScore.textContent = totalPoints + ' pts';

  // Log this answer
  answerLog.push({
    question:      questionText,
    yourAnswer:    clickedBtn.textContent,
    correctAnswer: correctText,
    correct:       isCorrect,
  });

  // Show next button
  el.nextBtn.style.display = 'block';
}

/* ── FEEDBACK BAR ────────────────────── */
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
   RESULTS SCREEN
══════════════════════════════════════ */
function showResults() {
  const total   = questions.length;
  const pct     = Math.round((score / total) * 100);
  const culture = CULTURES[currentCultureKey];

  // Medal & message based on score
  let medal, title, msg;
  if (pct >= 90) {
    medal = '🏆'; title = 'Inkosi! (Chief!)';       msg = 'Incredible knowledge of ' + culture.name + ' culture!';
  } else if (pct >= 70) {
    medal = '🌍'; title = 'Excellent!';              msg = 'Outstanding knowledge of ' + culture.name + ' culture!';
  } else if (pct >= 50) {
    medal = '📚'; title = 'Good effort!';            msg = 'Decent knowledge — keep exploring ' + culture.name + ' culture.';
  } else {
    medal = '🌱'; title = 'Keep learning!';          msg = 'There\'s lots more to discover about ' + culture.name + ' culture!';
  }

  el.resultsMedal.textContent    = medal;
  el.resultsTitle.textContent    = title;
  el.resultsScoreBig.textContent = score + ' / ' + total;
  el.resultsMsg.textContent      = msg;

  // Animate percentage bar (small delay so CSS transition fires)
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

  // Full progress bar on results
  el.progressBar.style.width = '100%';

  showScreen('results');
}

/* ══════════════════════════════════════
   BUTTON LISTENERS
══════════════════════════════════════ */
el.playAgainBtn.addEventListener('click', () => {
  startQuiz(currentCultureKey);
});

el.changeCultureBtn.addEventListener('click', () => {
  showScreen('home');
});

el.backBtn.addEventListener('click', () => {
  if (confirm('Go back to the home screen? Your progress will be lost.')) {
    showScreen('home');
  }
});

/* ══════════════════════════════════════
   UTILITIES
══════════════════════════════════════ */

/** Fisher-Yates shuffle — returns a new shuffled array */
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Truncate a string to maxLen chars, adding ellipsis if needed */
function truncate(str, maxLen) {
  return str.length > maxLen ? str.slice(0, maxLen) + '…' : str;
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
buildCultureGrid();
showScreen('home');