/* ============================================================
   PROJECT DATA

   Each object is one section. Add or remove entries to build
   your portfolio. The first entry is always the hero (centred
   title over a full-bleed image).

   Available variants
   ──────────────────
   (omit)          Full-bleed parallax image   — cover, images[]
   'video'         Autoplay looping video       — videoSrc, images[]
   'framed'        Contained image, centred     — cover, images[], bgColor
   'framed-right'  Contained image, right side  — cover, images[], bgColor
   'sized'         Portrait / custom frame      — cover, images[], bgColor

   Optional overrides (all variants):
     bgColor     CSS colour for section background  e.g. '#1a1714'
     frameWidth  Override default frame width        e.g. '45%'
     aspectRatio Override default frame ratio        e.g. '3/4'
   ============================================================ */
const projects = [

  // ── Your projects (full-bleed, default variant) ───────────
  {
    title: 'Solitude',
    cover: 'https://picsum.photos/seed/sn-sol/1920/1280',
    images: [
      'https://picsum.photos/seed/sn-sol1/1920/1280',
      'https://picsum.photos/seed/sn-sol2/1920/1280',
      'https://picsum.photos/seed/sn-sol3/1920/1280',
      'https://picsum.photos/seed/sn-sol4/1920/1280',
    ]
  },
  {
    title: 'Urban Drift',
    cover: 'https://picsum.photos/seed/sn-urb/1920/1280',
    images: [
      'https://picsum.photos/seed/sn-urb1/1920/1280',
      'https://picsum.photos/seed/sn-urb2/1920/1280',
      'https://picsum.photos/seed/sn-urb3/1920/1280',
    ]
  },
  {
    title: 'Last Light',
    cover: 'https://picsum.photos/seed/sn-last/1920/1280',
    images: [
      'https://picsum.photos/seed/sn-last1/1920/1280',
      'https://picsum.photos/seed/sn-last2/1920/1280',
      'https://picsum.photos/seed/sn-last3/1920/1280',
      'https://picsum.photos/seed/sn-last4/1920/1280',
    ]
  },
  {
    title: 'In Between',
    cover: 'https://picsum.photos/seed/sn-inb/1920/1280',
    images: [
      'https://picsum.photos/seed/sn-inb1/1920/1280',
      'https://picsum.photos/seed/sn-inb2/1920/1280',
      'https://picsum.photos/seed/sn-inb3/1920/1280',
    ]
  },
  {
    title: 'Silhouette',
    cover: 'https://picsum.photos/seed/sn-sil/1920/1280',
    images: [
      'https://picsum.photos/seed/sn-sil1/1920/1280',
      'https://picsum.photos/seed/sn-sil2/1920/1280',
      'https://picsum.photos/seed/sn-sil3/1920/1280',
    ]
  },

  // ── Variant examples — swap in your own content ───────────

  // Example 1 · VIDEO
  // Replace videoSrc with your own file, e.g. 'videos/motion.mp4'
  {
    title: 'Motion',
    variant: 'video',
    bgColor: '#0a0a0a',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    images: [
      'https://picsum.photos/seed/sn-vid1/1920/1280',
      'https://picsum.photos/seed/sn-vid2/1920/1280',
    ]
  },

  // Example 2 · FRAMED  (contained image, centred, coloured background)
  {
    title: 'Studio',
    variant: 'framed',
    bgColor: '#fadadd',   // baby pink
    cover: 'https://picsum.photos/seed/sn-frm/1920/1280',
    images: [
      'https://picsum.photos/seed/sn-frm1/1920/1280',
      'https://picsum.photos/seed/sn-frm2/1920/1280',
    ]
  },

  // Example 3 · FRAMED-RIGHT  (same as framed but offset to the right)
  {
    title: 'Tangent',
    variant: 'framed-right',
    bgColor: '#1a1714',
    cover: 'https://picsum.photos/seed/sn-frt/1920/1280',
    images: [
      'https://picsum.photos/seed/sn-frt1/1920/1280',
      'https://picsum.photos/seed/sn-frt2/1920/1280',
    ]
  },

  // Example 4 · SIZED  (portrait frame — lots of background visible)
  // Use a portrait-oriented source image for best results
  {
    title: 'Form',
    variant: 'sized',
    bgColor: '#0e1216',
    cover: 'https://picsum.photos/seed/sn-sz/1280/1920',
    images: [
      'https://picsum.photos/seed/sn-sz1/1920/1280',
      'https://picsum.photos/seed/sn-sz2/1920/1280',
    ]
  },

];

/* ============================================================
   BUILD SECTIONS
   ============================================================ */
projects.forEach((p, i) => {
  const sec     = document.createElement('section');
  const variant = p.variant || 'full';

  sec.classList.add(`section--${variant}`);
  if (p.bgColor) sec.style.background = p.bgColor;

  // ── Media element ──────────────────────────────────────────
  switch (variant) {

    case 'video': {
      // <video> fills the section just like .bg, parallax applied to it
      const vid = document.createElement('video');
      vid.className   = 'bg-video';
      vid.src         = p.videoSrc;
      vid.autoplay    = true;
      vid.muted       = true;
      vid.loop        = true;
      vid.setAttribute('playsinline', '');
      sec.appendChild(vid);
      // Vignette gradient (normally lives on .bg::after)
      const vig = document.createElement('div');
      vig.className = 'vignette';
      sec.appendChild(vig);
      break;
    }

    case 'framed':
    case 'framed-right':
    case 'sized': {
      // Contained image inside a frame box; no parallax
      const frame = document.createElement('div');
      frame.className = 'frame';
      if (p.frameWidth)  frame.style.width       = p.frameWidth;
      if (p.aspectRatio) frame.style.aspectRatio  = p.aspectRatio;
      const img = document.createElement('img');
      img.src = p.cover;
      img.alt = p.title;
      frame.appendChild(img);
      sec.appendChild(frame);
      break;
    }

    default: { // 'full' — full-bleed parallax bg
      const bg = document.createElement('div');
      bg.className = 'bg';
      bg.style.backgroundImage = `url('${p.cover}')`;
      sec.appendChild(bg);
    }
  }

  // ── Hero title (first section only) ───────────────────────
  if (i === 0) {
    sec.classList.add('section--hero');
    const info = document.createElement('div');
    info.className = 'info';
    info.innerHTML = `<h2 class="title">${p.title}</h2>`;
    sec.appendChild(info);
  }
  // Sections 1+ get their title from #fixed-label

  document.body.appendChild(sec);
  sec.addEventListener('click', () => openOverlay(i));
});

/* ============================================================
   SMOOTH PARALLAX

   Only .bg (full-bleed) and .bg-video (video) elements receive
   the parallax transform. Framed sections return null and are
   skipped. This lets each variant opt in or out automatically.

   Tuning
   ──────
   K        – parallax strength (0 = no effect, 1 = frozen).
   FRICTION – coast decay per frame after scroll release.
              0.80 = short glide.  0.92 = long, floaty glide.
   ============================================================ */
const K        = 0.35;
const FRICTION = 0.86;

const sectionEls   = Array.from(document.querySelectorAll('section'));
// One parallax target per section:
//   full / hero  → .bg          (background-image div)
//   video        → .bg-video    (<video> element)
//   framed / sized → .frame img  (absolutely-positioned image inside the frame)
const parallaxEls  = sectionEls.map(s => s.querySelector('.bg, .bg-video, .frame'));
let   sectionTops  = sectionEls.map(s => s.offsetTop);

let virtualScroll  = window.scrollY;
let prevRealScroll = window.scrollY;
let coastVelocity  = 0;

function applyParallax(scrollY) {
  const vh = window.innerHeight;

  parallaxEls.forEach((el, i) => {
    if (!el) return; // framed sections have no parallax element

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

  if (prevIdx === -1) {
    labelEl.textContent = projects[newIdx].title;
    void labelEl.offsetHeight;
    labelEl.classList.add('visible');
  } else {
    labelEl.classList.remove('visible');
    titleSwapTimer = setTimeout(() => {
      labelEl.textContent = projects[newIdx].title;
      void labelEl.offsetHeight;
      labelEl.classList.add('visible');
    }, FADE_MS);
  }
}

/* ============================================================
   OVERLAY
   ============================================================ */
const overlay      = document.getElementById('overlay');
const overlayLabel = document.getElementById('overlayLabel');
const gallery      = document.getElementById('gallery');

document.getElementById('closeBtn').addEventListener('click', closeOverlay);
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });

function openOverlay(i) {
  const p = projects[i];
  overlayLabel.textContent = p.title;
  gallery.innerHTML = '';
  p.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = p.title;
    gallery.appendChild(img);
  });
  overlay.scrollTop = 0;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOverlay() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
