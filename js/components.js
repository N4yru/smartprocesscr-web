const isSubpage = window.location.pathname.includes('/pages/');
const root = isSubpage ? '../' : './';

document.getElementById('nav-placeholder').innerHTML = `
<nav id="main-nav">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-logo">
      <img src="${root}imagenes/logo.jpeg" alt="Smart Process CR" />
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="${root}index.html">Inicio</a></li>
      <li><a href="${root}pages/servicios.html">Servicios</a></li>
      <li><a href="${root}pages/nosotros.html">Nosotros</a></li>
      <li><a href="${root}pages/testimonios.html">Testimonios</a></li>
      <li><a href="${root}pages/contacto.html" class="nav-cta">Contáctenos</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

document.getElementById('footer-placeholder').innerHTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand footer-col">
        <img src="${root}imagenes/logo.jpeg" alt="Smart Process CR" class="logo-footer" />
        <p>Automatización, desarrollo de software y dashboards para empresas costarricenses que quieren crecer con tecnología.</p>
      </div>
      <div class="footer-col">
        <h4>Navegación</h4>
        <ul>
          <li><a href="${root}index.html">Inicio</a></li>
          <li><a href="${root}pages/servicios.html">Servicios</a></li>
          <li><a href="${root}pages/nosotros.html">Nosotros</a></li>
          <li><a href="${root}pages/testimonios.html">Testimonios</a></li>
          <li><a href="${root}pages/contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Servicios</h4>
        <ul>
          <li><a href="${root}pages/servicios.html#automatizacion">Automatización</a></li>
          <li><a href="${root}pages/servicios.html#software">Desarrollo de software</a></li>
          <li><a href="${root}pages/servicios.html#dashboards">Dashboards Excel</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul>
          <li><a href="mailto:contacto@smartprocesscr.com">contacto@smartprocesscr.com</a></li>
          <li><a href="https://wa.me/50661040662" target="_blank">+506 6104-0662</a></li>
          <li><a href="#">Costa Rica 🇨🇷</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Smart Process CR. Todos los derechos reservados.</span>
      <a href="mailto:contacto@smartprocesscr.com">contacto@smartprocesscr.com</a>
    </div>
  </div>
</footer>`;

// Nav scroll effect
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});
nav.classList.toggle('scrolled', window.scrollY > 30);

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Active link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href').split('/').pop() === currentPage) a.classList.add('active');
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 90);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => observer.observe(el));

// Animated counters
document.querySelectorAll('[data-count]').forEach(el => {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const obs = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    obs.disconnect();
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.round(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 25);
  }, { threshold: 0.5 });
  obs.observe(el);
});
