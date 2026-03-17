/* ============================================================
   SMOOTH PARALLAX

   Only .bg (full-bleed) and .bg-video (video) elements receive
   the parallax transform. Framed/sized sections apply it to
   the .frame element as a whole unit.

   Tuning
   ──────
   K        – parallax strength (0 = no effect, 1 = frozen).
   FRICTION – coast decay per frame after scroll release.
              0.80 = short glide.  0.92 = long, floaty glide.
   ============================================================ */
const K        = 0.35;
const FRICTION = 0.86;

const sectionEls  = Array.from(document.querySelectorAll('section'));
// One parallax target per section:
//   full / hero  → .bg          (background-image div)
//   video        → .bg-video    (<video> element)
//   framed / sized → .frame     (whole frame box drifts)
const parallaxEls = sectionEls.map(s => s.querySelector('.bg, .bg-video, .frame'));
let   sectionTops = sectionEls.map(s => s.offsetTop);

let virtualScroll  = window.scrollY;
let prevRealScroll = window.scrollY;
let coastVelocity  = 0;

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
  });
}

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
  updateFixedTitle();
  requestAnimationFrame(tick);
}

window.addEventListener('resize', () => {
  sectionTops = sectionEls.map(s => s.offsetTop);
}, { passive: true });

applyParallax(window.scrollY);
requestAnimationFrame(tick);

/* ============================================================
   FIXED TITLE LABEL  (sections 2+)
   ============================================================ */
const labelEl      = document.querySelector('.label-text');
let activeTitleIdx = -1;
let titleSwapTimer = null;
const FADE_MS      = 380;

function updateFixedTitle() {
  const mid    = virtualScroll + window.innerHeight * 0.5;
  let   newIdx = -1;

  for (let i = 1; i < sectionEls.length; i++) {
    const top    = sectionTops[i];
    const bottom = top + sectionEls[i].offsetHeight;
    if (mid >= top && mid < bottom) { newIdx = i; break; }
  }

  if (newIdx === activeTitleIdx) return;

  clearTimeout(titleSwapTimer);
  const prevIdx  = activeTitleIdx;
  activeTitleIdx = newIdx;

  if (newIdx === -1) {
    labelEl.classList.remove('visible');
    return;
  }

  const newTitle = sectionEls[newIdx].dataset.title || '';

  if (prevIdx === -1) {
    labelEl.textContent = newTitle;
    void labelEl.offsetHeight;
    labelEl.classList.add('visible');
  } else {
    labelEl.classList.remove('visible');
    titleSwapTimer = setTimeout(() => {
      labelEl.textContent = newTitle;
      void labelEl.offsetHeight;
      labelEl.classList.add('visible');
    }, FADE_MS);
  }
}
