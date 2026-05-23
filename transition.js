/* ============================================================
   PAGE TRANSITION — 0.3 s black fade between pages
   The #page-transition div lives in the HTML so the very first
   browser paint is already black — no flash on arrival.
============================================================ */
(function () {
  const overlay = document.getElementById('page-transition');
  if (!overlay) return;

  /* ── Fade IN on arrival ────────────────────────────────────
     pageshow fires for both normal loads and bfcache restores,
     ensuring the overlay clears in every navigation scenario.  */
  window.addEventListener('pageshow', function () {
    /* One rAF guarantees the black frame has been painted
       before we start the opacity transition to 0.          */
    requestAnimationFrame(function () {
      overlay.style.opacity       = '0';
      overlay.style.pointerEvents = 'none';
    });
  });

  /* ── Fade OUT on departure ─────────────────────────────── */
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href ||
        href.startsWith('#') ||
        href.startsWith('javascript') ||
        link.target === '_blank' ||
        link.hasAttribute('download')) return;

    e.preventDefault();
    overlay.style.opacity       = '1';
    overlay.style.pointerEvents = 'all';
    setTimeout(function () { window.location.href = href; }, 300);
  });
})();
