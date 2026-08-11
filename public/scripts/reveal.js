(function () {
  try {
    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function revealAll() {
      document.querySelectorAll('[data-reveal]').forEach(function (el) {
        el.classList.add('is-revealed');
      });
    }

    // Mark that reveal JS is running so the CSS "opacity:0" initial state can
    // safely apply. Until this class is present, [data-reveal] elements stay
    // fully visible (see global.css safety net), so if this script fails to
    // load or errors out, content is never left hidden.
    document.documentElement.classList.add('js-reveal-ready');

    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = el.getAttribute('data-reveal-delay');
            if (delay) {
              el.style.transitionDelay = delay + 'ms';
            }
            el.classList.add('is-revealed');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    function init() {
      try {
        document.querySelectorAll('[data-reveal]').forEach(function (el) {
          observer.observe(el);
        });
        document.querySelectorAll('[data-reveal-stagger]').forEach(function (group) {
          var children = group.children;
          for (var i = 0; i < children.length; i++) {
            children[i].setAttribute('data-reveal', 'fade-up');
            children[i].setAttribute('data-reveal-delay', String(i * 90));
            observer.observe(children[i]);
          }
        });
      } catch (e) {
        // If anything goes wrong while wiring up the observer, fall back to
        // showing everything instead of leaving the page blank.
        revealAll();
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  } catch (e) {
    // Last-resort safety net: never let a reveal script error hide content.
    document.documentElement.classList.remove('js-reveal-ready');
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }
})();
