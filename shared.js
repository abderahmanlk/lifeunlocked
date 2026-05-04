// ============================================================
// LIFEUNLOCKED — SHARED JS
// Auth, Search, Nav, Utils
// ============================================================

// ── AUTH SYSTEM ──────────────────────────────────────────────
const AUTH = {
  currentUser: null,

  init() {
    const saved = localStorage.getItem('lu_user');
    if (saved) {
      try { this.currentUser = JSON.parse(saved); } catch(e) {}
    }
    this.updateNavUI();
  },

  signup(name, email, password) {
    // Validation
    if (!name || name.trim().length < 2) return { ok: false, msg: 'Please enter your full name.' };
    if (!email || !email.includes('@')) return { ok: false, msg: 'Please enter a valid email address.' };
    if (!password || password.length < 6) return { ok: false, msg: 'Password must be at least 6 characters.' };

    // Check if already exists
    const users = JSON.parse(localStorage.getItem('lu_users') || '[]');
    if (users.find(u => u.email === email.toLowerCase())) {
      return { ok: false, msg: 'An account with this email already exists. Please sign in.' };
    }

    // Create user
    const user = {
      id: 'u_' + Date.now(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: btoa(password), // basic encoding (not real security — Supabase will replace this)
      plan: 'free',
      createdAt: new Date().toISOString(),
      avatar: name.trim()[0].toUpperCase()
    };

    users.push(user);
    localStorage.setItem('lu_users', JSON.stringify(users));

    // Auto login
    const { password: _, ...safeUser } = user;
    this.currentUser = safeUser;
    localStorage.setItem('lu_user', JSON.stringify(safeUser));
    this.updateNavUI();

    return { ok: true, user: safeUser };
  },

  signin(email, password) {
    if (!email || !password) return { ok: false, msg: 'Please fill in all fields.' };

    const users = JSON.parse(localStorage.getItem('lu_users') || '[]');
    const user = users.find(u => u.email === email.toLowerCase().trim());

    if (!user) return { ok: false, msg: 'No account found with this email. Please sign up first.' };
    if (user.password !== btoa(password)) return { ok: false, msg: 'Incorrect password. Please try again.' };

    const { password: _, ...safeUser } = user;
    this.currentUser = safeUser;
    localStorage.setItem('lu_user', JSON.stringify(safeUser));
    this.updateNavUI();

    return { ok: true, user: safeUser };
  },

  signout() {
    this.currentUser = null;
    localStorage.removeItem('lu_user');
    this.updateNavUI();
    closeUserDropdown();
  },

  updateNavUI() {
    const loginBtn = document.getElementById('nav-login-btn');
    const navRight = document.querySelector('.nav-right');

    if (!navRight) return;

    // Remove existing user menu
    const existing = document.getElementById('user-menu-wrap');
    if (existing) existing.remove();

    if (this.currentUser) {
      if (loginBtn) loginBtn.style.display = 'none';

      const wrap = document.createElement('div');
      wrap.id = 'user-menu-wrap';
      wrap.style.position = 'relative';
      wrap.innerHTML = `
        <button class="user-menu-btn" onclick="toggleUserDropdown()" type="button">
          <div class="user-avatar">${this.currentUser.avatar || this.currentUser.name[0].toUpperCase()}</div>
          <span>${this.currentUser.name.split(' ')[0]}</span>
          <span style="color:var(--fa);font-size:11px">▼</span>
        </button>
        <div class="user-dropdown" id="user-dropdown">
          <div style="padding:10px 12px;border-bottom:1px solid var(--b1);margin-bottom:6px">
            <div style="font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:var(--tx)">${this.currentUser.name}</div>
            <div style="font-size:11px;color:var(--mu);margin-top:2px">${this.currentUser.email}</div>
            <div style="margin-top:6px"><span class="badge badge-${this.currentUser.plan === 'free' ? 'te' : 'or'}">${this.currentUser.plan === 'free' ? 'Free Plan' : this.currentUser.plan === 'pro' ? 'Pro' : 'VIP'}</span></div>
          </div>
          <a class="ud-item" href="#">👤 My Profile</a>
          <a class="ud-item" href="#">📋 My Plan</a>
          <a class="ud-item" href="#">⚙️ Settings</a>
          ${this.currentUser.plan === 'free' ? `<div class="ud-divider"></div><a class="ud-item" href="index.html#pricing" style="color:var(--or)">⭐ Upgrade to Pro</a>` : ''}
          <div class="ud-divider"></div>
          <div class="ud-item" onclick="AUTH.signout()" style="color:var(--pk)">🚪 Sign Out</div>
        </div>
      `;

      navRight.insertBefore(wrap, navRight.querySelector('.nav-cta-btn'));
    } else {
      if (loginBtn) loginBtn.style.display = 'block';
    }
  }
};

function toggleUserDropdown() {
  const dd = document.getElementById('user-dropdown');
  if (dd) dd.classList.toggle('open');
}

function closeUserDropdown() {
  const dd = document.getElementById('user-dropdown');
  if (dd) dd.classList.remove('open');
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('#user-menu-wrap')) closeUserDropdown();
});

// ── AUTH MODAL ────────────────────────────────────────────────
let currentAuthTab = 'signin';

function openAuth(tab = 'signin') {
  currentAuthTab = tab;
  const overlay = document.getElementById('auth-overlay');
  if (overlay) {
    overlay.classList.add('open');
    renderAuthForm(tab);
  }
}

function closeAuth() {
  const overlay = document.getElementById('auth-overlay');
  if (overlay) overlay.classList.remove('open');
}

function switchTab(tab) {
  currentAuthTab = tab;
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.getElementById('tab-' + tab);
  if (activeTab) activeTab.classList.add('active');
  renderAuthForm(tab);
}

function renderAuthForm(tab) {
  const area = document.getElementById('auth-form-area');
  if (!area) return;

  if (tab === 'signup') {
    area.innerHTML = `
      <div class="auth-form">
        <div class="auth-error" id="auth-error"></div>
        <div class="auth-success" id="auth-success"></div>
        <div class="auth-field">
          <label class="auth-label">Full Name</label>
          <input class="auth-input" type="text" id="auth-name" placeholder="Your full name" autocomplete="name">
        </div>
        <div class="auth-field">
          <label class="auth-label">Email Address</label>
          <input class="auth-input" type="email" id="auth-email" placeholder="your@email.com" autocomplete="email">
        </div>
        <div class="auth-field">
          <label class="auth-label">Password</label>
          <input class="auth-input" type="password" id="auth-password" placeholder="Min. 6 characters" autocomplete="new-password" onkeydown="if(event.key==='Enter')submitSignup()">
        </div>
        <button class="auth-submit" onclick="submitSignup()" type="button">Create My Free Account 🚀</button>
        <div class="auth-switch">Already have an account? <a onclick="switchTab('signin')">Sign in</a></div>
        <div style="font-size:11px;color:var(--fa);text-align:center;margin-top:12px">By signing up, you agree to our Terms of Service and Privacy Policy.</div>
      </div>`;
  } else {
    area.innerHTML = `
      <div class="auth-form">
        <div class="auth-error" id="auth-error"></div>
        <div class="auth-success" id="auth-success"></div>
        <div class="auth-field">
          <label class="auth-label">Email Address</label>
          <input class="auth-input" type="email" id="auth-email" placeholder="your@email.com" autocomplete="email">
        </div>
        <div class="auth-field">
          <label class="auth-label">Password</label>
          <input class="auth-input" type="password" id="auth-password" placeholder="Your password" autocomplete="current-password" onkeydown="if(event.key==='Enter')submitSignin()">
        </div>
        <div style="text-align:right;margin-bottom:14px"><a href="#" style="font-size:12px;color:var(--or);text-decoration:none">Forgot password?</a></div>
        <button class="auth-submit" onclick="submitSignin()" type="button">Sign In →</button>
        <div class="auth-switch">Don't have an account? <a onclick="switchTab('signup')">Create one free</a></div>
      </div>`;
  }
}

function showAuthMsg(type, msg) {
  const err = document.getElementById('auth-error');
  const suc = document.getElementById('auth-success');
  if (err) err.style.display = 'none';
  if (suc) suc.style.display = 'none';
  if (type === 'error' && err) { err.textContent = msg; err.style.display = 'block'; }
  if (type === 'success' && suc) { suc.textContent = msg; suc.style.display = 'block'; }
}

function submitSignup() {
  const name = document.getElementById('auth-name')?.value;
  const email = document.getElementById('auth-email')?.value;
  const password = document.getElementById('auth-password')?.value;
  const btn = document.querySelector('.auth-submit');
  if (btn) { btn.textContent = 'Creating account...'; btn.disabled = true; }

  setTimeout(() => {
    const result = AUTH.signup(name, email, password);
    if (btn) { btn.disabled = false; btn.textContent = 'Create My Free Account 🚀'; }
    if (result.ok) {
      showAuthMsg('success', `Welcome, ${result.user.name}! Your account is ready.`);
      setTimeout(() => closeAuth(), 1500);
    } else {
      showAuthMsg('error', result.msg);
    }
  }, 600);
}

function submitSignin() {
  const email = document.getElementById('auth-email')?.value;
  const password = document.getElementById('auth-password')?.value;
  const btn = document.querySelector('.auth-submit');
  if (btn) { btn.textContent = 'Signing in...'; btn.disabled = true; }

  setTimeout(() => {
    const result = AUTH.signin(email, password);
    if (btn) { btn.disabled = false; btn.textContent = 'Sign In →'; }
    if (result.ok) {
      showAuthMsg('success', `Welcome back, ${result.user.name}!`);
      setTimeout(() => closeAuth(), 1200);
    } else {
      showAuthMsg('error', result.msg);
    }
  }, 500);
}

// Close auth on overlay click
document.addEventListener('click', function(e) {
  const overlay = document.getElementById('auth-overlay');
  if (e.target === overlay) closeAuth();
});

// ── SEARCH ────────────────────────────────────────────────────
const SEARCH_INDEX = [
  {ico:'🇹🇭',title:'Thailand — Chiang Mai',sub:'DTV visa · $700–1,400/mo · Easy access',url:'destinations.html#thailand',cat:'Destination'},
  {ico:'🇮🇩',title:'Bali, Indonesia',sub:'e-Visa · $600–1,200/mo · Halal friendly',url:'destinations.html#bali',cat:'Destination'},
  {ico:'🇬🇪',title:'Georgia — 1 year visa-free',sub:'$500–900/mo · Most African/Middle East passports',url:'destinations.html#georgia',cat:'Destination'},
  {ico:'🇵🇹',title:'Portugal — D8 Nomad Visa',sub:'$1,200–2,200/mo · EU access',url:'destinations.html#portugal',cat:'Destination'},
  {ico:'🇹🇷',title:'Turkey — Istanbul',sub:'e-Visa · $800–1,500/mo · Muslim-friendly',url:'destinations.html#turkey',cat:'Destination'},
  {ico:'🇲🇾',title:'Malaysia — Kuala Lumpur',sub:'$700–1,300/mo · Muslim country · English spoken',url:'destinations.html#malaysia',cat:'Destination'},
  {ico:'🎬',title:'Video Editing',sub:'First income 2–4 weeks · $15–150/video',url:'income.html#video-editing',cat:'Income'},
  {ico:'🎨',title:'Graphic Design (Canva)',sub:'No degree · $20–200/project',url:'income.html#design',cat:'Income'},
  {ico:'📺',title:'YouTube Automation',sub:'Faceless · $500–5,000/mo passive',url:'income.html#youtube',cat:'Income'},
  {ico:'🌐',title:'Translation Services',sub:'First income 3–7 days · Arabic/French/English',url:'income.html#translation',cat:'Income'},
  {ico:'🤖',title:'AI Services',sub:'Hottest skill 2025 · $30–200/hour',url:'income.html#ai-services',cat:'Income'},
  {ico:'🤖',title:'Claude AI — How to earn with it',sub:'Writing, strategy, content creation',url:'income.html#claude',cat:'AI Tool'},
  {ico:'🎙️',title:'ElevenLabs — AI Voice',sub:'YouTube automation without showing face',url:'income.html#elevenlabs',cat:'AI Tool'},
  {ico:'🎨',title:'Canva AI — Design tool',sub:'Social media, logos, presentations',url:'income.html#canva',cat:'AI Tool'},
  {ico:'🎬',title:'CapCut AI — Video editing',sub:'TikTok, YouTube, Instagram Reels',url:'income.html#capcut',cat:'AI Tool'},
  {ico:'🇲🇦',title:'Morocco → Thailand DTV',sub:'500,000 THB required · Cooking school letter',url:'visa.html#morocco',cat:'Visa'},
  {ico:'🇩🇿',title:'Algeria → Georgia',sub:'Visa-free 1 year · Easiest option',url:'visa.html#algeria',cat:'Visa'},
  {ico:'🇮🇳',title:'India → Bali',sub:'Visa on Arrival · $35 fee',url:'visa.html#india',cat:'Visa'},
  {ico:'📋',title:'Phase 1 — First Income (0–3 months)',sub:'From $0 to $500–1,000/month',url:'program.html#phase1',cat:'Program'},
  {ico:'✈️',title:'Phase 4 — Immigration Support',sub:'Visa, housing, bank, community',url:'program.html#phase4',cat:'Program'},
  {ico:'👨‍👩‍👧',title:'Family Moving Abroad',sub:'Kids, schools, halal, couples',url:'program.html#family',cat:'Program'},
  {ico:'💬',title:'Support & FAQ',sub:'AI agent Luna + real team',url:'support.html',cat:'Support'},
  {ico:'💰',title:'Pricing Plans',sub:'Free, Pro $9.99/mo, VIP $149',url:'index.html#pricing',cat:'Pricing'},
];

let searchOpen = false;

function toggleSearch() {
  searchOpen = !searchOpen;
  const wrap = document.getElementById('search-bar-wrap');
  if (!wrap) return;
  if (searchOpen) {
    wrap.classList.add('open');
    const inp = document.getElementById('search-input');
    if (inp) { inp.focus(); inp.value = ''; }
    renderSearchDefault();
  } else {
    wrap.classList.remove('open');
  }
}

function renderSearchDefault() {
  const el = document.getElementById('search-results');
  if (!el) return;
  const popular = SEARCH_INDEX.slice(0, 6);
  el.innerHTML = '<div class="s-cat">Popular searches</div>' +
    popular.map(item => `<a class="s-item" href="${item.url}">
      <div class="s-item-ico">${item.ico}</div>
      <div><div class="s-item-title">${item.title}</div><div class="s-item-sub">${item.sub}</div></div>
      <span style="font-size:10px;font-weight:700;color:var(--fa);text-transform:uppercase;letter-spacing:.06em;margin-left:auto;white-space:nowrap">${item.cat}</span>
    </a>`).join('');
}

function runSearch(q) {
  const el = document.getElementById('search-results');
  if (!el) return;
  if (!q.trim()) { renderSearchDefault(); return; }
  const results = SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q.toLowerCase()) ||
    item.sub.toLowerCase().includes(q.toLowerCase()) ||
    item.cat.toLowerCase().includes(q.toLowerCase())
  ).slice(0, 8);
  if (!results.length) {
    el.innerHTML = '<div style="padding:20px;text-align:center;color:var(--fa);font-size:14px">No results found for "' + q + '"</div>';
    return;
  }
  el.innerHTML = results.map(item => `<a class="s-item" href="${item.url}">
    <div class="s-item-ico">${item.ico}</div>
    <div><div class="s-item-title">${item.title}</div><div class="s-item-sub">${item.sub}</div></div>
    <span style="font-size:10px;font-weight:700;color:var(--fa);text-transform:uppercase;letter-spacing:.06em;margin-left:auto;white-space:nowrap">${item.cat}</span>
  </a>`).join('');
}

// Close search on outside click
document.addEventListener('click', function(e) {
  if (searchOpen && !e.target.closest('#search-bar-wrap') && !e.target.closest('.nav-search-btn')) {
    searchOpen = false;
    const wrap = document.getElementById('search-bar-wrap');
    if (wrap) wrap.classList.remove('open');
  }
});

// ── MOBILE NAV ────────────────────────────────────────────────
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.toggle('open');
}

// ── LANGUAGE ─────────────────────────────────────────────────
const LANGS = {
  en: { cta: 'Start Free →', login: 'Log in', search: 'Search...' },
  fr: { cta: 'Commencer →', login: 'Connexion', search: 'Rechercher...' },
  ar: { cta: 'ابدأ مجاناً →', login: 'تسجيل', search: 'بحث...' },
  es: { cta: 'Empezar →', login: 'Iniciar', search: 'Buscar...' },
  tr: { cta: 'Başla →', login: 'Giriş', search: 'Ara...' },
  hi: { cta: 'शुरू करें →', login: 'लॉगिन', search: 'खोजें...' },
  pt: { cta: 'Começar →', login: 'Entrar', search: 'Buscar...' },
  id: { cta: 'Mulai →', login: 'Masuk', search: 'Cari...' },
};

let currentLang = localStorage.getItem('lu_lang') || 'en';

function L(lang, btn) {
  currentLang = lang;
  localStorage.setItem('lu_lang', lang);
  document.querySelectorAll('.lb-btn').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Apply basic translations to nav
  const cta = document.querySelector('.nav-cta-btn');
  const login = document.getElementById('nav-login-btn');
  const search = document.getElementById('ns-txt');
  const t = LANGS[lang] || LANGS.en;
  if (cta) cta.textContent = t.cta;
  if (login) login.textContent = t.login;
  if (search) search.textContent = t.search;
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  AUTH.init();

  // Set active lang button
  document.querySelectorAll('.lb-btn').forEach(btn => {
    if (btn.textContent.includes(currentLang.toUpperCase())) btn.classList.add('on');
  });

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && path.includes(a.getAttribute('href').split('#')[0]) && a.getAttribute('href') !== 'index.html') {
      a.classList.add('active');
    }
  });
});
