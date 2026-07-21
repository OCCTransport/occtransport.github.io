/* ── Dark mode toggle ──
   The <head> of each page sets data-theme before first paint (localStorage,
   falling back to prefers-color-scheme). This wires the nav toggle button. */
(function () {
  function sync(theme) {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  window.toggleTheme = function () {
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('occt-theme', next); } catch (e) {}
    sync(next);
  };

  document.addEventListener('DOMContentLoaded', function () {
    sync(document.documentElement.dataset.theme || 'light');
  });

  /* Follow OS changes only while the user hasn't chosen explicitly */
  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (localStorage.getItem('occt-theme')) return;
      var t = e.matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = t;
      sync(t);
    });
  } catch (e) {}
})();
