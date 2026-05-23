/* ============================================================
   SMOOTH PARALLAX + VIDEO TITLE PIN + SECTION LABELS

   K               – parallax strength (0 = still, 1 = frozen)
   FRICTION        – coast decay after scroll release
   PIN_TOP         – px below viewport top where video title pins
   LABEL_THRESHOLD – fraction of section height at which the
                     section label fades in (0.4 = 40 %)
   LABEL_BOTTOM    – desired viewport-bottom clearance (px) when
                     the label first appears at LABEL_THRESHOLD
   ============================================================ */
const K               = 0.35;
const FRICTION        = 0.86;
const PIN_TOP         = 10;
const LABEL_THRESHOLD = 0.4;
const LABEL_BOTTOM    = 60;   // px from viewport bottom at trigger

/* ── Section / parallax elements ─────────────────────────── */
const sectionEls  = Array.from(document.querySelectorAll('section'));
const parallaxEls = sectionEls.map(s => s.querySelector('.bg, .bg-video, .frame'));
let   sectionTops = sectionEls.map(s => s.offsetTop);

/* ── Video title ──────────────────────────────────────────── */
const videoTitleBlock = document.querySelector('.video-title-block');
const videoSectionIdx = sectionEls.findIndex(s => s.querySelector('.bg-video'));
let   videoTitleH     = videoTitleBlock ? videoTitleBlock.offsetHeight : 0;

/* ── Per-section title labels ─────────────────────────────────
   Labels are appended directly to <body> (NOT inside sections)
   so section { overflow: hidden } never clips them.
   Their page-level `top` is computed so the label appears
   LABEL_BOTTOM px above the viewport bottom the moment the
   40 % threshold fires.  Then the parallax transform moves it
   at K speed, identical to the section's .frame.
   ─────────────────────────────────────────────────────────── */
const sectionLabelEls = sectionEls.map((section, i) => {
  if (i === videoSectionIdx) return null;
  const title = section.dataset.title;
  if (!title) return null;
  const el = document.createElement('div');
  el.className = 'section-label';
  el.textContent = title;
  document.body.appendChild(el);
  return el;
});

/* Compute each label's absolute page-top so it appears at the
   right viewport position when the threshold fires.

   Derivation:
     viewport_Y = label_page_top + offset_at_trigger - scrollY_at_trigger
     offset_at_trigger = THRESHOLD * sHeight * K
     scrollY_at_trigger = sTop + THRESHOLD * sHeight
     target viewport_Y = vh - LABEL_BOTTOM

   Solving: label_page_top = sTop + vh - LABEL_BOTTOM
                            + THRESHOLD * sHeight * (1 - K)        */
function positionSectionLabels() {
  const vh = window.innerHeight;
  sectionLabelEls.forEach((label, i) => {
    if (!label) return;
    const sTop    = sectionTops[i];
    const sHeight = sectionEls[i].offsetHeight;
    label.style.top = (sTop + vh - LABEL_BOTTOM
                       + LABEL_THRESHOLD * sHeight * (1 - K)) + 'px';
  });
}

/* ── Scroll state ─────────────────────────────────────────── */
let virtualScroll  = window.scrollY;
let prevRealScroll = window.scrollY;
let coastVelocity  = 0;

/* ── Parallax ─────────────────────────────────────────────── */
function applyParallax(scrollY) {
  const vh = window.innerHeight;

  parallaxEls.forEach((el, i) => {
    if (!el) return;

    const top    = sectionTops[i];
    const height = sectionEls[i].offsetHeight;

    const distFromView = top - scrollY;
    if (distFromView > vh * 2 || distFromView < -(height + vh)) return;

    const offset = (scrollY - top) * K;
    el.style.transform = `translate3d(0, ${offset}px, 0)`;

    // Section label gets the identical offset — moves at parallax speed
    const label = sectionLabelEls[i];
    if (label) label.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
}

/* ── Section label fade ───────────────────────────────────── */
function updateSectionLabels(scrollY) {
  sectionEls.forEach((section, i) => {
    const label = sectionLabelEls[i];
    if (!label) return;
    const sTop    = sectionTops[i];
    const sHeight = section.offsetHeight;
    const show    = scrollY >= sTop + sHeight * LABEL_THRESHOLD
                 && scrollY <  sTop + sHeight;
    label.classList.toggle('visible', show);
  });
}

/* ── Video title: parallax follow + pin + fade ────────────── */
function updateVideoTitle(scrollY) {
  if (!videoTitleBlock || videoSectionIdx === -1) return;
  const sTop    = sectionTops[videoSectionIdx];
  const sHeight = sectionEls[videoSectionIdx].offsetHeight;

  const gone = scrollY >= sTop + sHeight;
  videoTitleBlock.style.opacity = gone ? '0' : '1';
  if (gone) return;

  const offset         = (scrollY - sTop) * K;
  const naturalCenterY = (sTop - scrollY) + sHeight * 0.5 + offset;
  const pinnedCenterY  = PIN_TOP + videoTitleH / 2;
  const pinnedOffset   = pinnedCenterY - (sTop - scrollY) - sHeight * 0.5;
  const useOffset      = naturalCenterY <= pinnedCenterY ? pinnedOffset : offset;

  videoTitleBlock.style.transform = `translate(-50%, calc(-50% + ${useOffset}px))`;
}

/* ── Tick loop ────────────────────────────────────────────── */
function tick() {
  const realScroll = window.scrollY;
  const delta      = realScroll - prevRealScroll;
  prevRealScroll   = realScroll;

  if (Math.abs(delta) > 0.5) {
    virtualScroll = realScroll;
    coastVelocity = delta;
  } else {
    coastVelocity *= FRICTION;
    virtualScroll += coastVelocity;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    virtualScroll   = Math.max(0, Math.min(maxScroll, virtualScroll));
    if (Math.abs(coastVelocity) < 0.05) {
      virtualScroll = realScroll;
      coastVelocity = 0;
    }
  }

  applyParallax(virtualScroll);
  updateVideoTitle(virtualScroll);
  updateSectionLabels(virtualScroll);
  requestAnimationFrame(tick);
}

window.addEventListener('resize', () => {
  sectionTops = sectionEls.map(s => s.offsetTop);
  if (videoTitleBlock) videoTitleH = videoTitleBlock.offsetHeight;
  positionSectionLabels();
}, { passive: true });

positionSectionLabels();
applyParallax(window.scrollY);
updateVideoTitle(window.scrollY);
updateSectionLabels(window.scrollY);
requestAnimationFrame(tick);
