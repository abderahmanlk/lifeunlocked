// ═══════════════════════════════════════════════════════════════
// LIFEUNLOCKED — SHARED.JS
// Global system: Auth + i18n + Search + Nav
// ═══════════════════════════════════════════════════════════════

// ── 1. TRANSLATIONS ─────────────────────────────────────────────
const I18N = {
  en: {
    // Nav
    nav_program: 'Program', nav_destinations: 'Destinations', nav_income: 'Income & AI',
    nav_visa: 'Visa', nav_support: 'Support', nav_pricing: 'Pricing',
    nav_login: 'Log in', nav_cta: 'Start Free →', nav_search: 'Search...',
    lang_label: 'Language',
    // Auth
    auth_signin: 'Sign In', auth_signup: 'Create Account',
    auth_name: 'Full Name', auth_name_ph: 'Your full name',
    auth_email: 'Email Address', auth_email_ph: 'your@email.com',
    auth_password: 'Password', auth_password_ph_signup: 'Min. 6 characters',
    auth_password_ph_signin: 'Your password',
    auth_submit_signup: 'Create My Free Account 🚀',
    auth_submit_signin: 'Sign In →',
    auth_have_account: 'Already have an account?', auth_no_account: "Don't have an account?",
    auth_forgot: 'Forgot password?',
    auth_terms: 'By signing up, you agree to our Terms of Service and Privacy Policy.',
    // Footer
    ft_platform: 'Platform', ft_plans: 'Plans', ft_legal: 'Legal',
    ft_privacy: 'Privacy', ft_terms: 'Terms', ft_help: 'Help',
    ft_tagline: 'Earn online. Live anywhere.',
    // Generic
    learn_more: 'Learn more', start_free: 'Start free',
  },
  fr: {
    nav_program: 'Programme', nav_destinations: 'Destinations', nav_income: 'Revenus & IA',
    nav_visa: 'Visa', nav_support: 'Aide', nav_pricing: 'Tarifs',
    nav_login: 'Connexion', nav_cta: 'Commencer →', nav_search: 'Rechercher...',
    lang_label: 'Langue',
    auth_signin: 'Connexion', auth_signup: 'Créer un compte',
    auth_name: 'Nom complet', auth_name_ph: 'Votre nom complet',
    auth_email: 'Adresse e-mail', auth_email_ph: 'votre@email.com',
    auth_password: 'Mot de passe', auth_password_ph_signup: 'Min. 6 caractères',
    auth_password_ph_signin: 'Votre mot de passe',
    auth_submit_signup: 'Créer mon compte gratuit 🚀',
    auth_submit_signin: 'Se connecter →',
    auth_have_account: 'Déjà un compte ?', auth_no_account: "Pas encore de compte ?",
    auth_forgot: 'Mot de passe oublié ?',
    auth_terms: "En vous inscrivant, vous acceptez nos Conditions et Politique de Confidentialité.",
    ft_platform: 'Plateforme', ft_plans: 'Plans', ft_legal: 'Légal',
    ft_privacy: 'Confidentialité', ft_terms: 'Conditions', ft_help: 'Aide',
    ft_tagline: 'Gagne en ligne. Vis où tu veux.',
    learn_more: 'En savoir plus', start_free: 'Gratuit',
  },
  ar: {
    nav_program: 'البرنامج', nav_destinations: 'الوجهات', nav_income: 'الدخل والذكاء',
    nav_visa: 'التأشيرة', nav_support: 'الدعم', nav_pricing: 'الأسعار',
    nav_login: 'تسجيل الدخول', nav_cta: 'ابدأ مجاناً ←', nav_search: 'بحث...',
    lang_label: 'اللغة',
    auth_signin: 'تسجيل الدخول', auth_signup: 'إنشاء حساب',
    auth_name: 'الاسم الكامل', auth_name_ph: 'اسمك الكامل',
    auth_email: 'البريد الإلكتروني', auth_email_ph: 'your@email.com',
    auth_password: 'كلمة المرور', auth_password_ph_signup: '6 أحرف على الأقل',
    auth_password_ph_signin: 'كلمة المرور',
    auth_submit_signup: 'إنشاء حسابي المجاني 🚀',
    auth_submit_signin: 'تسجيل الدخول ←',
    auth_have_account: 'لديك حساب؟', auth_no_account: 'ليس لديك حساب؟',
    auth_forgot: 'نسيت كلمة المرور؟',
    auth_terms: 'بالتسجيل، فإنك توافق على شروط الخدمة وسياسة الخصوصية.',
    ft_platform: 'المنصة', ft_plans: 'الخطط', ft_legal: 'قانوني',
    ft_privacy: 'الخصوصية', ft_terms: 'الشروط', ft_help: 'المساعدة',
    ft_tagline: 'اكسب أونلاين. عش أينما شئت.',
    learn_more: 'اعرف المزيد', start_free: 'مجاني',
  },
  es: {
    nav_program: 'Programa', nav_destinations: 'Destinos', nav_income: 'Ingresos & IA',
    nav_visa: 'Visa', nav_support: 'Soporte', nav_pricing: 'Precios',
    nav_login: 'Entrar', nav_cta: 'Empezar →', nav_search: 'Buscar...',
    lang_label: 'Idioma',
    auth_signin: 'Iniciar Sesión', auth_signup: 'Crear Cuenta',
    auth_name: 'Nombre completo', auth_name_ph: 'Tu nombre completo',
    auth_email: 'Correo electrónico', auth_email_ph: 'tu@email.com',
    auth_password: 'Contraseña', auth_password_ph_signup: 'Mín. 6 caracteres',
    auth_password_ph_signin: 'Tu contraseña',
    auth_submit_signup: 'Crear mi cuenta gratis 🚀',
    auth_submit_signin: 'Iniciar sesión →',
    auth_have_account: '¿Ya tienes cuenta?', auth_no_account: '¿No tienes cuenta?',
    auth_forgot: '¿Olvidaste tu contraseña?',
    auth_terms: 'Al registrarte aceptas nuestros Términos y Política de Privacidad.',
    ft_platform: 'Plataforma', ft_plans: 'Planes', ft_legal: 'Legal',
    ft_privacy: 'Privacidad', ft_terms: 'Términos', ft_help: 'Ayuda',
    ft_tagline: 'Gana online. Vive donde quieras.',
    learn_more: 'Saber más', start_free: 'Gratis',
  },
  tr: {
    nav_program: 'Program', nav_destinations: 'Destinasyonlar', nav_income: 'Gelir & AI',
    nav_visa: 'Vize', nav_support: 'Destek', nav_pricing: 'Fiyatlar',
    nav_login: 'Giriş', nav_cta: 'Başla →', nav_search: 'Ara...',
    lang_label: 'Dil',
    auth_signin: 'Giriş Yap', auth_signup: 'Hesap Oluştur',
    auth_name: 'Tam Ad', auth_name_ph: 'Adınız soyadınız',
    auth_email: 'E-posta', auth_email_ph: 'sizin@email.com',
    auth_password: 'Şifre', auth_password_ph_signup: 'Min. 6 karakter',
    auth_password_ph_signin: 'Şifreniz',
    auth_submit_signup: 'Ücretsiz Hesabımı Oluştur 🚀',
    auth_submit_signin: 'Giriş Yap →',
    auth_have_account: 'Zaten hesabınız var mı?', auth_no_account: 'Hesabınız yok mu?',
    auth_forgot: 'Şifremi unuttum?',
    auth_terms: 'Kayıt olarak Hizmet Şartlarımızı kabul etmiş olursunuz.',
    ft_platform: 'Platform', ft_plans: 'Planlar', ft_legal: 'Yasal',
    ft_privacy: 'Gizlilik', ft_terms: 'Şartlar', ft_help: 'Yardım',
    ft_tagline: 'Online kazan. İstediğin yerde yaşa.',
    learn_more: 'Daha fazla', start_free: 'Ücretsiz',
  },
  hi: {
    nav_program: 'कार्यक्रम', nav_destinations: 'गंतव्य', nav_income: 'आय और AI',
    nav_visa: 'वीजा', nav_support: 'सहायता', nav_pricing: 'मूल्य',
    nav_login: 'लॉग इन', nav_cta: 'शुरू करें →', nav_search: 'खोजें...',
    lang_label: 'भाषा',
    auth_signin: 'लॉग इन', auth_signup: 'खाता बनाएं',
    auth_name: 'पूरा नाम', auth_name_ph: 'आपका पूरा नाम',
    auth_email: 'ईमेल पता', auth_email_ph: 'आपका@email.com',
    auth_password: 'पासवर्ड', auth_password_ph_signup: 'न्यूनतम 6 अक्षर',
    auth_password_ph_signin: 'आपका पासवर्ड',
    auth_submit_signup: 'मेरा मुफ्त खाता बनाएं 🚀',
    auth_submit_signin: 'लॉग इन →',
    auth_have_account: 'पहले से खाता है?', auth_no_account: 'खाता नहीं है?',
    auth_forgot: 'पासवर्ड भूल गए?',
    auth_terms: 'पंजीकरण करके आप हमारी शर्तों से सहमत हैं।',
    ft_platform: 'प्लेटफॉर्म', ft_plans: 'योजनाएं', ft_legal: 'कानूनी',
    ft_privacy: 'गोपनीयता', ft_terms: 'शर्तें', ft_help: 'सहायता',
    ft_tagline: 'ऑनलाइन कमाएं। कहीं भी रहें।',
    learn_more: 'और जानें', start_free: 'मुफ्त',
  },
  pt: {
    nav_program: 'Programa', nav_destinations: 'Destinos', nav_income: 'Renda & IA',
    nav_visa: 'Visto', nav_support: 'Suporte', nav_pricing: 'Preços',
    nav_login: 'Entrar', nav_cta: 'Começar →', nav_search: 'Buscar...',
    lang_label: 'Idioma',
    auth_signin: 'Entrar', auth_signup: 'Criar Conta',
    auth_name: 'Nome completo', auth_name_ph: 'Seu nome completo',
    auth_email: 'E-mail', auth_email_ph: 'seu@email.com',
    auth_password: 'Senha', auth_password_ph_signup: 'Mín. 6 caracteres',
    auth_password_ph_signin: 'Sua senha',
    auth_submit_signup: 'Criar Minha Conta Grátis 🚀',
    auth_submit_signin: 'Entrar →',
    auth_have_account: 'Já tem conta?', auth_no_account: 'Não tem conta?',
    auth_forgot: 'Esqueceu a senha?',
    auth_terms: 'Ao se cadastrar, você aceita nossos Termos e Política de Privacidade.',
    ft_platform: 'Plataforma', ft_plans: 'Planos', ft_legal: 'Legal',
    ft_privacy: 'Privacidade', ft_terms: 'Termos', ft_help: 'Ajuda',
    ft_tagline: 'Ganhe online. Viva onde quiser.',
    learn_more: 'Saber mais', start_free: 'Grátis',
  },
  id: {
    nav_program: 'Program', nav_destinations: 'Destinasi', nav_income: 'Penghasilan & AI',
    nav_visa: 'Visa', nav_support: 'Bantuan', nav_pricing: 'Harga',
    nav_login: 'Masuk', nav_cta: 'Mulai →', nav_search: 'Cari...',
    lang_label: 'Bahasa',
    auth_signin: 'Masuk', auth_signup: 'Buat Akun',
    auth_name: 'Nama lengkap', auth_name_ph: 'Nama lengkap Anda',
    auth_email: 'Alamat email', auth_email_ph: 'kamu@email.com',
    auth_password: 'Kata sandi', auth_password_ph_signup: 'Min. 6 karakter',
    auth_password_ph_signin: 'Kata sandi Anda',
    auth_submit_signup: 'Buat Akun Gratis Saya 🚀',
    auth_submit_signin: 'Masuk →',
    auth_have_account: 'Sudah punya akun?', auth_no_account: 'Belum punya akun?',
    auth_forgot: 'Lupa kata sandi?',
    auth_terms: 'Dengan mendaftar, Anda menyetujui Ketentuan dan Kebijakan Privasi kami.',
    ft_platform: 'Platform', ft_plans: 'Paket', ft_legal: 'Legal',
    ft_privacy: 'Privasi', ft_terms: 'Ketentuan', ft_help: 'Bantuan',
    ft_tagline: 'Hasilkan online. Hidup di mana saja.',
    learn_more: 'Pelajari lebih', start_free: 'Gratis',
  },
};

const LANG_OPTIONS = [
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'ar', flag: '🇸🇦', label: 'AR' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
  { code: 'tr', flag: '🇹🇷', label: 'TR' },
  { code: 'hi', flag: '🇮🇳', label: 'HI' },
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
  { code: 'id', flag: '🇮🇩', label: 'ID' },
];

// ── 2. I18N ENGINE ──────────────────────────────────────────────
const i18n = {
  current: localStorage.getItem('lu_lang') || 'en',

  t(key) {
    const lang = I18N[this.current] || I18N.en;
    return lang[key] || I18N.en[key] || key;
  },

  apply() {
    const lang = this.current;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = this.t(key);
      if (value) el.textContent = value;
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const value = this.t(key);
      if (value) el.placeholder = value;
    });

    // Translate HTML content (allows <span> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const value = this.t(key);
      if (value) el.innerHTML = value;
    });

    // Update lang bar active state
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      const code = btn.getAttribute('data-lang-btn');
      btn.classList.toggle('on', code === lang);
    });

    // Trigger custom event so pages can rerender dynamic content
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  },

  set(lang) {
    if (!I18N[lang]) return;
    this.current = lang;
    localStorage.setItem('lu_lang', lang);
    this.apply();
  },
};

window.i18n = i18n; // expose globally

// ── 3. INJECT GLOBAL LANG BAR ───────────────────────────────────
function injectLangBar() {
  // Skip if already present (page-defined) or already injected
  if (document.getElementById('lu-lang-bar')) return;

  const bar = document.createElement('div');
  bar.id = 'lu-lang-bar';
  bar.className = 'lu-lang-bar';
  bar.innerHTML = `
    <span class="lu-lang-label">🌍 <span data-i18n="lang_label">Language</span></span>
    <div class="lu-lang-btns">
      ${LANG_OPTIONS.map(l => `
        <button class="lu-lang-btn" data-lang-btn="${l.code}" onclick="i18n.set('${l.code}')">${l.flag} ${l.label}</button>
      `).join('')}
    </div>
  `;

  // Insert at top, before <nav> or first child
  const nav = document.getElementById('main-nav');
  if (nav) document.body.insertBefore(bar, nav);
  else document.body.insertBefore(bar, document.body.firstChild);
}

// ── 4. AUTH SYSTEM ──────────────────────────────────────────────
const AUTH = {
  currentUser: null,

  init() {
    const saved = localStorage.getItem('lu_user');
    if (saved) {
      try { this.currentUser = JSON.parse(saved); } catch (e) {}
    }
    this.updateNavUI();
  },

  signup(name, email, password) {
    if (!name || name.trim().length < 2) return { ok: false, msg: 'Please enter your full name.' };
    if (!email || !email.includes('@')) return { ok: false, msg: 'Please enter a valid email.' };
    if (!password || password.length < 6) return { ok: false, msg: 'Password must be at least 6 characters.' };

    const users = JSON.parse(localStorage.getItem('lu_users') || '[]');
    if (users.find(u => u.email === email.toLowerCase())) {
      return { ok: false, msg: 'An account with this email already exists.' };
    }

    const user = {
      id: 'u_' + Date.now(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: btoa(password),
      plan: 'free',
      createdAt: new Date().toISOString(),
      avatar: name.trim()[0].toUpperCase(),
    };

    users.push(user);
    localStorage.setItem('lu_users', JSON.stringify(users));

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
    if (!user) return { ok: false, msg: 'No account found with this email.' };
    if (user.password !== btoa(password)) return { ok: false, msg: 'Incorrect password.' };

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
  },

  updateNavUI() {
    const loginBtn = document.getElementById('nav-login-btn');
    const navRight = document.querySelector('.nav-right');
    if (!navRight) return;

    const existing = document.getElementById('user-menu-wrap');
    if (existing) existing.remove();

    if (this.currentUser) {
      if (loginBtn) loginBtn.style.display = 'none';

      const wrap = document.createElement('div');
      wrap.id = 'user-menu-wrap';
      wrap.style.position = 'relative';
      wrap.innerHTML = `
        <button class="user-menu-btn" onclick="document.getElementById('user-dropdown').classList.toggle('open')" type="button">
          <div class="user-avatar">${this.currentUser.avatar}</div>
          <span>${this.currentUser.name.split(' ')[0]}</span>
          <span style="color:var(--fa);font-size:11px">▼</span>
        </button>
        <div class="user-dropdown" id="user-dropdown">
          <div style="padding:10px 12px;border-bottom:1px solid var(--b1);margin-bottom:6px">
            <div style="font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:var(--tx)">${this.currentUser.name}</div>
            <div style="font-size:11px;color:var(--mu);margin-top:2px">${this.currentUser.email}</div>
            <div style="margin-top:6px"><span class="badge badge-${this.currentUser.plan === 'free' ? 'te' : 'or'}">${this.currentUser.plan === 'free' ? 'Free' : this.currentUser.plan === 'pro' ? 'Pro' : 'VIP'}</span></div>
          </div>
          <a class="ud-item" href="#">👤 My Profile</a>
          <a class="ud-item" href="#">📋 My Plan</a>
          ${this.currentUser.plan === 'free' ? `<a class="ud-item" href="index.html#pricing" style="color:var(--or)">⭐ Upgrade to Pro</a>` : ''}
          <div class="ud-divider"></div>
          <div class="ud-item" onclick="AUTH.signout()" style="color:var(--pk);cursor:pointer">🚪 Sign Out</div>
        </div>
      `;
      navRight.insertBefore(wrap, navRight.querySelector('.nav-cta-btn'));
    } else {
      if (loginBtn) loginBtn.style.display = 'block';
    }
  },
};

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('#user-menu-wrap')) {
    const dd = document.getElementById('user-dropdown');
    if (dd) dd.classList.remove('open');
  }
});

window.AUTH = AUTH;

// ── 5. AUTH MODAL ───────────────────────────────────────────────
function openAuth(tab = 'signin') {
  const overlay = document.getElementById('auth-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  switchTab(tab);
}

function closeAuth() {
  const overlay = document.getElementById('auth-overlay');
  if (overlay) overlay.classList.remove('open');
}

function switchTab(tab) {
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
          <label class="auth-label">${i18n.t('auth_name')}</label>
          <input class="auth-input" type="text" id="auth-name" placeholder="${i18n.t('auth_name_ph')}" autocomplete="name">
        </div>
        <div class="auth-field">
          <label class="auth-label">${i18n.t('auth_email')}</label>
          <input class="auth-input" type="email" id="auth-email" placeholder="${i18n.t('auth_email_ph')}" autocomplete="email">
        </div>
        <div class="auth-field">
          <label class="auth-label">${i18n.t('auth_password')}</label>
          <input class="auth-input" type="password" id="auth-password" placeholder="${i18n.t('auth_password_ph_signup')}" autocomplete="new-password" onkeydown="if(event.key==='Enter')submitSignup()">
        </div>
        <button class="auth-submit" onclick="submitSignup()" type="button">${i18n.t('auth_submit_signup')}</button>
        <div class="auth-switch">${i18n.t('auth_have_account')} <a onclick="switchTab('signin')">${i18n.t('auth_signin')}</a></div>
        <div style="font-size:11px;color:var(--fa);text-align:center;margin-top:12px">${i18n.t('auth_terms')}</div>
      </div>`;
  } else {
    area.innerHTML = `
      <div class="auth-form">
        <div class="auth-error" id="auth-error"></div>
        <div class="auth-success" id="auth-success"></div>
        <div class="auth-field">
          <label class="auth-label">${i18n.t('auth_email')}</label>
          <input class="auth-input" type="email" id="auth-email" placeholder="${i18n.t('auth_email_ph')}" autocomplete="email">
        </div>
        <div class="auth-field">
          <label class="auth-label">${i18n.t('auth_password')}</label>
          <input class="auth-input" type="password" id="auth-password" placeholder="${i18n.t('auth_password_ph_signin')}" autocomplete="current-password" onkeydown="if(event.key==='Enter')submitSignin()">
        </div>
        <div style="text-align:right;margin-bottom:14px"><a href="#" style="font-size:12px;color:var(--or);text-decoration:none">${i18n.t('auth_forgot')}</a></div>
        <button class="auth-submit" onclick="submitSignin()" type="button">${i18n.t('auth_submit_signin')}</button>
        <div class="auth-switch">${i18n.t('auth_no_account')} <a onclick="switchTab('signup')">${i18n.t('auth_signup')}</a></div>
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
  const result = AUTH.signup(
    document.getElementById('auth-name')?.value,
    document.getElementById('auth-email')?.value,
    document.getElementById('auth-password')?.value
  );
  if (result.ok) {
    showAuthMsg('success', `Welcome, ${result.user.name}!`);
    setTimeout(closeAuth, 1200);
  } else showAuthMsg('error', result.msg);
}

function submitSignin() {
  const result = AUTH.signin(
    document.getElementById('auth-email')?.value,
    document.getElementById('auth-password')?.value
  );
  if (result.ok) {
    showAuthMsg('success', `Welcome back, ${result.user.name}!`);
    setTimeout(closeAuth, 1000);
  } else showAuthMsg('error', result.msg);
}

document.addEventListener('click', (e) => {
  if (e.target?.id === 'auth-overlay') closeAuth();
});

// ── 6. SEARCH ───────────────────────────────────────────────────
const SEARCH_INDEX = [
  { ico: '🇹🇭', title: 'Thailand — Chiang Mai', sub: 'DTV visa · $700–1,400/mo', url: 'destinations.html#thailand', cat: 'Destination' },
  { ico: '🇮🇩', title: 'Bali, Indonesia', sub: 'e-Visa · $600–1,200/mo · Halal', url: 'destinations.html#bali', cat: 'Destination' },
  { ico: '🇬🇪', title: 'Georgia — 1 year visa-free', sub: '$500–900/mo · Easy', url: 'destinations.html#georgia', cat: 'Destination' },
  { ico: '🇵🇹', title: 'Portugal — D8 Nomad Visa', sub: '$1,200–2,200/mo · EU access', url: 'destinations.html#portugal', cat: 'Destination' },
  { ico: '🇹🇷', title: 'Turkey — Istanbul', sub: 'Muslim-friendly · $800–1,500/mo', url: 'destinations.html#turkey', cat: 'Destination' },
  { ico: '🇲🇾', title: 'Malaysia — Kuala Lumpur', sub: 'Muslim country · English spoken', url: 'destinations.html#malaysia', cat: 'Destination' },
  { ico: '🎬', title: 'Video Editing', sub: 'First income 2-4 weeks', url: 'income.html', cat: 'Income' },
  { ico: '🎨', title: 'Graphic Design (Canva)', sub: 'No degree needed', url: 'income.html', cat: 'Income' },
  { ico: '📺', title: 'YouTube Automation', sub: '$500-5,000/mo passive', url: 'income.html', cat: 'Income' },
  { ico: '🌐', title: 'Translation Services', sub: 'Arabic/French/English', url: 'income.html', cat: 'Income' },
  { ico: '🤖', title: 'Claude AI', sub: 'Writing & strategy', url: 'income.html', cat: 'AI Tool' },
  { ico: '🎬', title: 'CapCut AI', sub: 'Video editing', url: 'income.html', cat: 'AI Tool' },
  { ico: '🇲🇦', title: 'Morocco → Thailand DTV', sub: '500,000 THB required', url: 'visa.html', cat: 'Visa' },
  { ico: '🇩🇿', title: 'Algeria → Georgia', sub: 'Visa-free 1 year', url: 'visa.html', cat: 'Visa' },
  { ico: '📋', title: 'Phase 1 — First Income', sub: '0 to $1,000/mo in 90 days', url: 'program.html', cat: 'Program' },
  { ico: '✈️', title: 'Phase 4 — Immigration', sub: 'Visa, housing, bank, community', url: 'program.html', cat: 'Program' },
  { ico: '💬', title: 'Support & FAQ', sub: 'AI Luna + real team', url: 'support.html', cat: 'Support' },
  { ico: '💰', title: 'Pricing Plans', sub: 'Free · Pro · VIP', url: 'index.html#pricing', cat: 'Pricing' },
];

let searchOpen = false;
function toggleSearch() {
  searchOpen = !searchOpen;
  const wrap = document.getElementById('search-bar-wrap');
  if (!wrap) return;
  if (searchOpen) {
    wrap.classList.add('open');
    setTimeout(() => {
      const inp = document.getElementById('search-input');
      if (inp) { inp.focus(); inp.value = ''; }
      renderSearchDefault();
    }, 50);
  } else {
    wrap.classList.remove('open');
  }
}

function renderSearchDefault() {
  const el = document.getElementById('search-results');
  if (!el) return;
  el.innerHTML = '<div class="s-cat">Popular</div>' +
    SEARCH_INDEX.slice(0, 6).map(item =>
      `<a class="s-item" href="${item.url}">
        <div class="s-item-ico">${item.ico}</div>
        <div><div class="s-item-title">${item.title}</div><div class="s-item-sub">${item.sub}</div></div>
        <span style="font-size:10px;font-weight:700;color:var(--fa);text-transform:uppercase;letter-spacing:.06em;margin-left:auto">${item.cat}</span>
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
    el.innerHTML = '<div style="padding:20px;text-align:center;color:var(--fa)">No results for "' + q + '"</div>';
    return;
  }
  el.innerHTML = results.map(item =>
    `<a class="s-item" href="${item.url}">
      <div class="s-item-ico">${item.ico}</div>
      <div><div class="s-item-title">${item.title}</div><div class="s-item-sub">${item.sub}</div></div>
      <span style="font-size:10px;font-weight:700;color:var(--fa);text-transform:uppercase;letter-spacing:.06em;margin-left:auto">${item.cat}</span>
    </a>`).join('');
}

document.addEventListener('click', (e) => {
  if (searchOpen && !e.target.closest('#search-bar-wrap') && !e.target.closest('.nav-search-btn')) {
    searchOpen = false;
    const wrap = document.getElementById('search-bar-wrap');
    if (wrap) wrap.classList.remove('open');
  }
});

// ── 7. MOBILE NAV ───────────────────────────────────────────────
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.toggle('open');
}

// ── 8. EXPOSE GLOBAL FUNCTIONS ──────────────────────────────────
window.openAuth = openAuth;
window.closeAuth = closeAuth;
window.switchTab = switchTab;
window.submitSignup = submitSignup;
window.submitSignin = submitSignin;
window.toggleSearch = toggleSearch;
window.runSearch = runSearch;
window.toggleMobileNav = toggleMobileNav;

// ── 9. INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectLangBar();
  i18n.apply();
  AUTH.init();

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href')?.split('#')[0];
    if (href && href === path) a.classList.add('active');
  });
});
