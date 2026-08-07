const ALERT = {
  active: true,
  text: 'Fall 2026 Schedule is now published. OCCT will be running ICS-only interim service 8/10-8/13, and alternate Welcome Back Weekend service 8/14-8/17. Regular service will begin on Tuesday, August 18th.',
  link: { href: 'news.html', label: 'Details' }
};

(function () {
  var bar = document.querySelector('.alert-bar');
  if (!bar) return;

  if (!ALERT.active) {
    bar.style.display = 'none';
    return;
  }

  // Derive path prefix from script src so links work at any directory depth
  var src = (document.currentScript || {}).src || '';
  var prefix = src.replace(/js\/alerts\.js.*$/, '');

  var linkHtml = ALERT.link
    ? ' <a href="' + prefix + ALERT.link.href + '">' + ALERT.link.label + '</a>'
    : '';

  bar.innerHTML =
    '<div class="alert-bar-inner">' +
      '<svg aria-hidden="true" focusable="false" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
        '<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.008v.008H12v-.008z"/>' +
      '</svg>' +
      '<p><strong>Service alert:</strong> ' + ALERT.text + linkHtml + '</p>' +
    '</div>';
})();
