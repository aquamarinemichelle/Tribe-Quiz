/**
 * UBUNTU QUIZ — AUTH
 * Handles Supabase sign-up, sign-in, sign-out,
 * and session-aware navbar updates on index.html.
 */

/* ── Init Supabase client (from CDN) ── */
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Make requireAuth globally available for game.js
window.requireAuth = function() {
  return _supabase.auth.getSession().then(({ data }) => !!data.session);
};

/* ══════════════════════════════════════
   AUTH PAGE LOGIC  (auth.html)
══════════════════════════════════════ */
(function initAuthPage() {
  const authPage = document.getElementById('auth-page');
  if (!authPage) return; // not on auth.html

  const tabSignIn  = document.getElementById('tab-signin');
  const tabSignUp  = document.getElementById('tab-signup');
  const formSignIn = document.getElementById('form-signin');
  const formSignUp = document.getElementById('form-signup');
  const authMsg    = document.getElementById('auth-message');

  /* Switch tabs */
  tabSignIn.addEventListener('click', () => switchTab('signin'));
  tabSignUp.addEventListener('click', () => switchTab('signup'));

  /* Check URL for ?tab=signup */
  const params = new URLSearchParams(window.location.search);
  if (params.get('tab') === 'signup') switchTab('signup');

  function switchTab(tab) {
    const isSignIn = tab === 'signin';
    tabSignIn.classList.toggle('active', isSignIn);
    tabSignUp.classList.toggle('active', !isSignIn);
    formSignIn.classList.toggle('hidden', !isSignIn);
    formSignUp.classList.toggle('hidden', isSignIn);
    clearMessage();
  }

  function showMessage(text, isError = true) {
    authMsg.textContent = text;
    authMsg.className = 'auth-message ' + (isError ? 'error' : 'success');
    authMsg.style.display = 'block';
  }
  function clearMessage() {
    authMsg.style.display = 'none';
    authMsg.textContent = '';
  }

  /* ── SIGN IN ── */
  formSignIn.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearMessage();
    const email    = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value;
    const btn      = document.getElementById('btn-signin');

    btn.disabled    = true;
    btn.textContent = 'Signing in…';

    const { error } = await _supabase.auth.signInWithPassword({ email, password });

    if (error) {
      showMessage(error.message);
      btn.disabled    = false;
      btn.textContent = 'Sign In';
    } else {
      showMessage('Welcome back! Redirecting…', false);
      setTimeout(() => window.location.href = 'index.html', 1000);
    }
  });

  /* ── SIGN UP ── */
  formSignUp.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearMessage();
    const name     = document.getElementById('signup-name').value.trim();
    const email    = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirm  = document.getElementById('signup-confirm').value;
    const btn      = document.getElementById('btn-signup');

    if (password !== confirm) {
      showMessage('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      showMessage('Password must be at least 6 characters.');
      return;
    }

    btn.disabled    = true;
    btn.textContent = 'Creating account…';

    const { error } = await _supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: name } }
    });

    if (error) {
      showMessage(error.message);
      btn.disabled    = false;
      btn.textContent = 'Create Account';
    } else {
      showMessage(
        'Account created! Check your email to confirm, then sign in.',
        false
      );
      setTimeout(() => switchTab('signin'), 2500);
      btn.disabled    = false;
      btn.textContent = 'Create Account';
    }
  });

  /* ── GOOGLE OAuth ── */
  const googleBtns = document.querySelectorAll('.btn-google');
  googleBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      await _supabase.auth.signInWithOAuth({
        provider: 'google',
        options:  { redirectTo: window.location.origin + '/index.html' }
      });
    });
  });

  /* If already logged in, skip auth page */
  _supabase.auth.getSession().then(({ data }) => {
    if (data.session) window.location.href = 'index.html';
  });
})();

/* ══════════════════════════════════════
   HOME PAGE SESSION / NAVBAR  (index.html)
══════════════════════════════════════ */
(function initHomePage() {
  const homePage = document.getElementById('screen-home');
  if (!homePage) return; // not on index.html

  const navAuthArea  = document.getElementById('nav-auth-area');
  const navUser      = document.getElementById('nav-user-area');
  const navUserName  = document.getElementById('nav-user-name');
  const btnSignOut   = document.getElementById('btn-signout');

  async function refreshNav() {
    const { data } = await _supabase.auth.getSession();
    const session  = data.session;

    if (session) {
      const name = session.user.user_metadata?.display_name
                || session.user.email.split('@')[0];
      navUserName.textContent = '👤 ' + name;
      navAuthArea.style.display = 'none';
      navUser.style.display     = 'flex';
    } else {
      navAuthArea.style.display = 'flex';
      navUser.style.display     = 'none';
    }
  }

  refreshNav();

  /* Sign out */
  btnSignOut && btnSignOut.addEventListener('click', async () => {
    await _supabase.auth.signOut();
    refreshNav();
    // Rebuild culture grid after sign out
    if (typeof buildCultureGrid === 'function') {
      setTimeout(() => buildCultureGrid(), 100);
    }
  });

  /* Listen for auth changes (tab refocus, etc.) */
  _supabase.auth.onAuthStateChange(() => {
    refreshNav();
    // Rebuild culture grid when auth state changes
    if (typeof buildCultureGrid === 'function') {
      setTimeout(() => buildCultureGrid(), 100);
    }
  });
})();