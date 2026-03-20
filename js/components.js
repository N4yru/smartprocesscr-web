const isSubpage = window.location.pathname.includes('/pages/');
const R = isSubpage ? '../' : './';

/* ── NAV ── */
document.getElementById('nav-placeholder').innerHTML = `
<nav id="main-nav">
  <div class="nav-inner">
    <a href="${R}index.html" class="nav-logo">
      <img src="${R}imagenes/logo.png" alt="Smart Process CR"/>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="${R}index.html">Inicio</a></li>
      <li><a href="${R}pages/servicios.html">Servicios</a></li>
      <li><a href="${R}pages/nosotros.html">Nosotros</a></li>
      <li><a href="${R}pages/testimonios.html">Testimonios</a></li>
      <li><a href="${R}pages/contacto.html" class="nav-cta">Contáctenos</a></li>
    </ul>
    <div class="nav-right">
      <button class="theme-toggle" id="theme-btn" title="Cambiar tema">🌙</button>
      <button class="nav-hamburger" id="hamburger" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>`;

/* ── FOOTER ── */
document.getElementById('footer-placeholder').innerHTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand footer-col">
        <img src="${R}imagenes/logo.png" alt="Smart Process CR" class="footer-logo"/>
        <p>Automatización, desarrollo de software y dashboards para empresas costarricenses que quieren crecer con tecnología.</p>
      </div>
      <div class="footer-col">
        <h4>Navegación</h4>
        <ul>
          <li><a href="${R}index.html">Inicio</a></li>
          <li><a href="${R}pages/servicios.html">Servicios</a></li>
          <li><a href="${R}pages/nosotros.html">Nosotros</a></li>
          <li><a href="${R}pages/testimonios.html">Testimonios</a></li>
          <li><a href="${R}pages/contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Servicios</h4>
        <ul>
          <li><a href="${R}pages/servicios.html#automatizacion">Automatización</a></li>
          <li><a href="${R}pages/servicios.html#software">Desarrollo de software</a></li>
          <li><a href="${R}pages/servicios.html#dashboards">Dashboards Excel</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul>
          <li><a href="mailto:contacto@smartprocesscr.com">contacto@smartprocesscr.com</a></li>
          <li><a href="https://wa.me/50661040662" target="_blank">+506 6104-0662</a></li>
          <li><span>Costa Rica 🇨🇷</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Smart Process CR. Todos los derechos reservados.</span>
      <a href="mailto:contacto@smartprocesscr.com">contacto@smartprocesscr.com</a>
    </div>
  </div>
</footer>`;

/* ── THEME ── */
const html = document.documentElement;
const btn  = document.getElementById('theme-btn');
const saved = localStorage.getItem('theme');
const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initDark = saved ? saved === 'dark' : sysDark;
function applyTheme(dark) {
  html.setAttribute('data-theme', dark ? 'dark' : 'light');
  if (btn) btn.textContent = dark ? '🌙' : '☀️';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}
applyTheme(initDark);
if (btn) btn.addEventListener('click', () => applyTheme(html.getAttribute('data-theme') !== 'dark'));

/* ── NAV SCROLL ── */
const nav = document.getElementById('main-nav');
const onScroll = () => nav.classList.toggle('stuck', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── HAMBURGER ── */
const ham   = document.getElementById('hamburger');
const links = document.getElementById('nav-links');
if (ham) {
  ham.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

/* ── ACTIVE LINK ── */
const cur = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href').split('/').pop() === cur) a.classList.add('active');
});

/* ── REVEAL ON SCROLL ── */
const revObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('on'), i * 80);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ── COUNTERS ── */
document.querySelectorAll('[data-count]').forEach(el => {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const co = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    co.disconnect();
    let n = 0; const step = target / 55;
    const t = setInterval(() => {
      n = Math.min(n + step, target);
      el.textContent = Math.round(n) + suffix;
      if (n >= target) clearInterval(t);
    }, 22);
  }, { threshold: 0.5 });
  co.observe(el);
});
