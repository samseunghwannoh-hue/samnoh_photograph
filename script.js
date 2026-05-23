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
   style.top is set to the section's page-centre so the label
   appears centred over the photo.  The parallax transform then
   keeps it aligned with the photo as the user scrolls.
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

/* Anchor each label at the page-centre of its section.
   The parallax transform (translate -50% Y + offset) then keeps
   it visually centred on the photo as the user scrolls.          */
function positionSectionLabels() {
  sectionLabelEls.forEach((label, i) => {
    if (!label) return;
    const sTop    = sectionTops[i];
    const sHeight = sectionEls[i].offsetHeight;
    label.style.top = (sTop + sHeight * 0.5) + 'px';
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

    // Fade out photo as the next section appears at the viewport bottom.
    // Fade zone = last 40 % of the section's scroll travel.
    const fadeStart = top + height * 0.6;
    const fadeEnd   = top + height;
    const opacity   = scrollY <= fadeStart ? 1
                    : scrollY >= fadeEnd   ? 0
                    : 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    el.style.opacity = opacity;

    // Section label: centred on photo, moves at parallax speed
    const label = sectionLabelEls[i];
    if (label) label.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
  });
}

/* ── Section label fade ───────────────────────────────────── */
/*
  Opacity is a continuous function of scroll — no CSS transition.
  Fade in : 20 % → 40 % of section scroll travel
             (label enters the viewport from below during this zone)
  Full     : 40 % → 60 %
  Fade out : 60 % → 100 %
             (matches the photo fade-out so both leave together)
*/
function updateSectionLabels(scrollY) {
  const vh = window.innerHeight;
  sectionEls.forEach((section, i) => {
    const label = sectionLabelEls[i];
    if (!label) return;
    const sTop    = sectionTops[i];
    const sHeight = section.offsetHeight;

    const fadeInStart  = sTop - vh;            // section enters viewport bottom
    const fadeInEnd    = sTop + sHeight * 0.2; // fully visible by 20 % through
    const fadeOutStart = sTop + sHeight * 0.6;
    const fadeOutEnd   = sTop + sHeight;

    const opacity =
        scrollY < fadeInStart  ? 0
      : scrollY < fadeInEnd    ? (scrollY - fadeInStart) / (fadeInEnd - fadeInStart)
      : scrollY < fadeOutStart ? 1
      : scrollY < fadeOutEnd   ? 1 - (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart)
      :                          0;

    label.style.opacity = opacity;
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
