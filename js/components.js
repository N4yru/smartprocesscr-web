// Detectar ruta relativa según profundidad
const isSubpage = window.location.pathname.includes('/pages/');
const root = isSubpage ? '../' : './';

// ── NAV ──
const navHTML = `
<nav>
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

// ── FOOTER ──
const footerHTML = `
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
          <li><a href="${root}pages/servicios.html#dashboards">Dashboards en Excel</a></li>
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

// Inyectar
document.getElementById('nav-placeholder').innerHTML = navHTML;
document.getElementById('footer-placeholder').innerHTML = footerHTML;
