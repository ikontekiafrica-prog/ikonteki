document.addEventListener('DOMContentLoaded', () => {
  // Global Loader
  const loader = document.getElementById('global-loader');

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').className = 'fa-solid fa-bars';
      });
    });
  }

  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Loader on Page Navigation - with debounce for performance
  const navigationDelay = window.innerWidth <= 768 ? 250 : 400; // Faster on mobile
  const navigationLoader = debounce((href) => {
    if (loader) loader.classList.add('active');
    setTimeout(() => {
      window.location.href = href;
    }, navigationDelay);
  }, 100);

  document.querySelectorAll('a').forEach(link => {
    if (link.hostname === window.location.hostname && !link.hash && link.target !== '_blank') {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
          e.preventDefault();
          navigationLoader(href);
        }
      });
    }
  });

  // Loader on Form Submissions
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', () => {
      if (loader) loader.classList.add('active');
    });
  });
});
