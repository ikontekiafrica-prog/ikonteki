try { localStorage.setItem('darkMode', 'true'); } catch (e) {}
/**
 * IkonTeki Africa - Global Unified Navbar Component
 * 
 * Edit this file to update the navigation bar globally across all site pages!
 * Usage in any page:
 *   <div id="navbar"></div>
 *   <script src="navbar.js"></script>
 */
(function () {
  var path = window.location.pathname;
  var currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  var isHome = currentPage === 'index.html' || currentPage === '' || currentPage === '/';
  var isServices = currentPage === 'services.html';
  var isAbout = currentPage === 'about.html';
  var isPricing = currentPage === 'pricing.html';
  var isTeki4Impakt = currentPage === 'teki-4-impakt.html';
  var isBlog = currentPage === 'blog-grid.html' || currentPage.startsWith('blog-');
  var isContact = currentPage === 'contact.html';

  function getStyle(active) {
    return active
      ? 'color: #00AEEF !important; font-weight: 600;'
      : 'color: #FFFFFF !important; font-weight: 600;';
  }

  var consultHref = isHome ? '#support' : 'contact.html';

  var navbarHtml = `
    <!-- ===== Global Header Start ===== -->
    <header
      class="g s r vd ya cj"
      :class="{ 'hh sm _k dj bl ll' : stickyMenu }"
      @scroll.window="stickyMenu = (window.pageYOffset > 20) ? true : false"
      style="background-color: #000000 !important; background: #000000 !important; position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; z-index: 99999 !important; border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;"
    >
      <div class="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
        <div class="vd to/4 tc wf yf">
          <a href="index.html" class="tc wf xf sf" style="text-decoration: none;">
            <img src="images/ikonteki-africa-logo.png" alt="IkonTeki Africa" class="brand-logo-img" />
          </a>

          <!-- Hamburger Toggle BTN -->
          <button class="po rc" @click="navigationOpen = !navigationOpen" aria-label="Toggle Navigation">
            <span class="rc i pf re pd">
              <span class="du-block h q vd yc">
                <span class="rc i r s eh um tg te rd eb ml jl dl" :class="{ 'ue el': !navigationOpen }"></span>
                <span class="rc i r s eh um tg te rd eb ml jl fl" :class="{ 'ue qr': !navigationOpen }"></span>
                <span class="rc i r s eh um tg te rd eb ml jl gl" :class="{ 'ue hl': !navigationOpen }"></span>
              </span>
              <span class="du-block h q vd yc lf">
                <span class="rc eh um tg ml jl el h na r ve yc" :class="{ 'sd dl': !navigationOpen }"></span>
                <span class="rc eh um tg ml jl qr h s pa vd rd" :class="{ 'sd rr': !navigationOpen }"></span>
              </span>
            </span>
          </button>
          <!-- Hamburger Toggle BTN -->
        </div>

        <div
          class="vd wo/4 sd qo f ho oo wf yf"
          :class="{ 'd hh rm sr td ud qg ug jc yh': navigationOpen }"
          style="background-color: #000000;"
        >
          <nav>
            <ul class="tc _o sf yo cg ep">
              <li><a href="index.html" class="xl" style="${getStyle(isHome)}">Home</a></li>
              <li><a href="services.html" class="xl" style="${getStyle(isServices)}">Services</a></li>
              <li><a href="about.html" class="xl" style="${getStyle(isAbout)}">About Us</a></li>
              <li><a href="pricing.html" class="xl" style="${getStyle(isPricing)}">Pricing</a></li>
              <li><a href="teki-4-impakt.html" class="xl" style="${getStyle(isTeki4Impakt)}">Teki 4 Impakt</a></li>
              <li><a href="blog-grid.html" class="xl" style="${getStyle(isBlog)}">Blog</a></li>
              <li><a href="contact.html" class="xl" style="${getStyle(isContact)}">Contact</a></li>
            </ul>
          </nav>

          <div class="tc wf ig pb no" style="gap: 16px; align-items: center;">
            <a href="tel:+255712286993" style="color: #F5A623 !important; font-weight: 700; text-decoration: none; font-size: 0.95rem; margin-right: 8px; white-space: nowrap;">+255 712 286 993</a>
            <a href="${consultHref}" class="btn-solid-cyan" style="padding: 8px 20px; font-size: 0.88rem; text-decoration: none; white-space: nowrap;">Consult Now</a>
          </div>
        </div>
      </div>
    </header>
    <!-- ===== Global Header End ===== -->
  `;

  var mountEl = document.getElementById('navbar') || document.getElementById('main-navbar') || document.querySelector('header');
  if (mountEl) {
    mountEl.outerHTML = navbarHtml;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navbarHtml);
  }
})();
