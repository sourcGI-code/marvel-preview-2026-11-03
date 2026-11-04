(() => {
  'use strict';
  const expiresAt = Date.parse('2026-11-04T04:59:00Z');
  const source = 'https://sourcgi-code.github.io/marvel-labs-site/';
  let expired = false;
  let frame;
  function checkExpiry() {
    if (Date.now() < expiresAt && !expired) return false;
    if (!expired) {
      expired = true;
      frame?.remove();
      document.title = 'Link expired — Marvel Labs';
      document.body.innerHTML = '<main><h1>This link has expired.</h1><p>The temporary Marvel Labs website closed at 11:59 p.m. Eastern on November 3, 2026.</p></main>';
    }
    return true;
  }
  if (checkExpiry()) return;
  frame = document.createElement('iframe');
  frame.title = 'Marvel Labs website';
  frame.src = source;
  frame.allow = 'autoplay; fullscreen; payment';
  frame.setAttribute('allowfullscreen', '');
  document.getElementById('message').replaceWith(frame);
  setTimeout(checkExpiry, Math.max(0, expiresAt - Date.now()));
  setInterval(checkExpiry, 1000);
  addEventListener('pageshow', checkExpiry);
  document.addEventListener('visibilitychange', checkExpiry);
})();
