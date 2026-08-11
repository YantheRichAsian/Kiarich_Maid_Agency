(function () {
  var STORAGE_KEY = 'kiarich-lang';

  function detectLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'zh') return stored;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function getByPath(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function applyLang(lang) {
    var dict = window.__I18N__ && window.__I18N__[lang];
    if (!dict) return;
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = getByPath(dict, key);
      if (typeof val === 'string') {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = getByPath(dict, key);
      if (typeof val === 'string') el.setAttribute('placeholder', val);
    });
    document.querySelectorAll('[data-i18n-list]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-list');
      var arr = getByPath(dict, key);
      if (Array.isArray(arr)) {
        var itemTpl = el.getAttribute('data-i18n-item') || 'title';
        var children = el.children;
        for (var i = 0; i < children.length && i < arr.length; i++) {
          var titleEl = children[i].querySelector('[data-i18n-step-title]');
          var bodyEl = children[i].querySelector('[data-i18n-step-body]');
          if (titleEl && arr[i].title) titleEl.textContent = arr[i].title;
          if (bodyEl && arr[i].body) bodyEl.textContent = arr[i].body;
        }
      }
    });
    document.querySelectorAll('[data-i18n-options]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-options');
      var arr = getByPath(dict, key);
      if (Array.isArray(arr)) {
        el.querySelectorAll('option[data-idx]').forEach(function (opt) {
          var idx = parseInt(opt.getAttribute('data-idx'), 10);
          if (arr[idx]) opt.textContent = arr[idx];
        });
      }
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(function (el) {
      el.textContent = lang === 'zh' ? 'EN' : '中文';
      el.setAttribute('data-current-lang', lang);
    });
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    window.__CURRENT_LANG__ = lang;
  }

  function init() {
    var lang = detectLang();
    applyLang(lang);
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = window.__CURRENT_LANG__ === 'zh' ? 'en' : 'zh';
        applyLang(next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
