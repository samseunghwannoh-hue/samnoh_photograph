/* ============================================================
   INTRO OVERLAY — "Couple" fades out after 3 s
============================================================ */
(function () {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;
  setTimeout(() => {
    overlay.classList.add('fade-out');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
  }, 3000);
})();


/* ============================================================
   CONFIGURATION
   ============================================================
   BASE_PATH — folder containing the subfolders, relative to
               this HTML file.
   PHOTOS    — all image paths relative to BASE_PATH.
               To swap to a different project: change BASE_PATH
               and update the PHOTOS array below.
============================================================ */
const BASE_PATH = '../images/02_couple';

const PHOTOS = [
  /* 01_ky */
  '01_ky/DSCF2757.jpg',
  '01_ky/NS402225.jpg',
  '01_ky/NS402522.jpg',
  '01_ky/NS403745.jpg',
  '01_ky/NS404928.jpg',
  '01_ky/NS406138.jpg',
  '01_ky/NS406714.jpg',

  /* 02_es */
  '02_es/NS400225.jpg',
  '02_es/NS400307.jpg',
  '02_es/NS400368.jpg',
  '02_es/NS400388.jpg',
  '02_es/NS400421.jpg',
  '02_es/NS400483.jpg',
  '02_es/NS400560.jpg',
  '02_es/NS400592.jpg',
  '02_es/NS400639.jpg',
  '02_es/NS400732.jpg',
  '02_es/NS500030.jpg',
  '02_es/NS500050.jpg',
  '02_es/NS500194.jpg',
  '02_es/NS500263.jpg',
  '02_es/NS500590.jpg',
  '02_es/NS500705.jpg',
  '02_es/NS500772.jpg',
  '02_es/NS500794.jpg',
  '02_es/NS500808.jpg',
  '02_es/NS500871.jpg',
  '02_es/NS500946.jpg',
  '02_es/NS500960.jpg',
  '02_es/NS501008.jpg',
  '02_es/NS501014.jpg',
  '02_es/NS501284.jpg',
  '02_es/NS501337.jpg',
  '02_es/NS501432.jpg',
  '02_es/NS501528.jpg',
  '02_es/NS501640.jpg',
  '02_es/NS501793.jpg',

  /* 03_ms */
  '03_ms/BK 19 edited/NS601107.jpg',
  '03_ms/BK 19 edited/NS700530.jpg',
  '03_ms/BK 19 edited/NS700548.jpg',

  /* 04_sy */
  '04_sy/NS400195.jpg',
  '04_sy/NS400386.jpg',
  '04_sy/NS400452-향상됨-노이즈 감소.jpg',
  '04_sy/NS400477.jpg',
  '04_sy/NS500035.jpg',
  '04_sy/NS500123.jpg',
  '04_sy/NS500206.jpg',
  '04_sy/NS500235.jpg',
  '04_sy/NS500373.jpg',
  '04_sy/NS500493.jpg',
  '04_sy/NS500506.jpg',
  '04_sy/NS500578.jpg',
  '04_sy/NS500634.jpg',
  '04_sy/NS500671.jpg',
  '04_sy/NS500703.jpg',
  '04_sy/NS500975.jpg',
  '04_sy/NS501054-향상됨-노이즈 감소.jpg',

  /* 05_km */
  '05_km/NS400078-4.jpg',
  '05_km/NS400144-5.jpg',
  '05_km/NS400168-6.jpg',
  '05_km/NS400281-7.jpg',
  '05_km/NS400340-8.jpg',
  '05_km/NS400342-9.jpg',
  '05_km/NS400451-12.jpg',
  '05_km/NS400481-13.jpg',
  '05_km/NS400559-14.jpg',
  '05_km/NS400699-20.jpg',
  '05_km/NS400757-21.jpg',
  '05_km/NS600051-1.jpg',
  '05_km/NS600108-2.jpg',
  '05_km/NS600349-3.jpg',
  '05_km/NS600370-10.jpg',
  '05_km/NS600415-11.jpg',
  '05_km/NS600542-15.jpg',
  '05_km/NS600548-16.jpg',
  '05_km/NS600580-17.jpg',
  '05_km/NS600732-18.jpg',
  '05_km/NS600747-19.jpg',

  /* 06_jh */
  '06_jh/NS400019-2.jpg',
  '06_jh/NS400027-3.jpg',
  '06_jh/NS400109-10.jpg',
  '06_jh/NS400147-14.jpg',
  '06_jh/NS400218-23.jpg',
  '06_jh/NS400223-24.jpg',
  '06_jh/NS400252-27.jpg',
  '06_jh/NS400285-33.jpg',
  '06_jh/NS400310-36.jpg',
  '06_jh/NS400364-42.jpg',
  '06_jh/NS400463-51.jpg',
  '06_jh/NS400753-88.jpg',
  '06_jh/NS400773-90.jpg',
  '06_jh/NS400810-94.jpg',
  '06_jh/NS400839-99.jpg',
  '06_jh/NS400874-104.jpg',
  '06_jh/NS400886-106.jpg',
  '06_jh/NS400967-122.jpg',
  '06_jh/NS400983-125.jpg',
  '06_jh/NS401030-134.jpg',
  '06_jh/NS401033-135.jpg',
  '06_jh/NS401143-145.jpg',
  '06_jh/NS401186-151.jpg',
  '06_jh/NS401231-157.jpg',
  '06_jh/NS401495-183.jpg',
  '06_jh/NS401564-188.jpg',
  '06_jh/NS401883-222.jpg',
  '06_jh/NS401915-226.jpg',
  '06_jh/NS401967-230.jpg',
  '06_jh/NS402002-233.jpg',
  '06_jh/NS402039-237.jpg',
  '06_jh/NS402091-243.jpg',
  '06_jh/NS402139-249.jpg',
  '06_jh/NS600154-255.jpg',
  '06_jh/NS600220-267.jpg',
  '06_jh/NS600227-268.jpg',
  '06_jh/NS600287-274.jpg',
  '06_jh/NS600310-276.jpg',
  '06_jh/NS600343-280.jpg',
  '06_jh/NS600344-281.jpg',
  '06_jh/NS600441-293.jpg',
  '06_jh/NS600456-295.jpg',
  '06_jh/NS600501-301.jpg',
  '06_jh/NS600509-302.jpg',
  '06_jh/NS600593-314.jpg',
  '06_jh/NS600605-315.jpg',
  '06_jh/NS600623-318.jpg',
  '06_jh/NS600630-320.jpg',
  '06_jh/NS600714-332.jpg',
  '06_jh/NS600746-334.jpg',
  '06_jh/NS600758-336.jpg',
  '06_jh/NS600799-341.jpg',
  '06_jh/NS600825-347.jpg',
  '06_jh/NS600944-361.jpg',
  '06_jh/NS601043-377.jpg',
  '06_jh/NS601059-379.jpg',
  '06_jh/NS601116-385.jpg',
  '06_jh/NS601129-388.jpg',

  /* 08_sh */
  '08_sh/NS600039.jpg',
  '08_sh/NS600126.jpg',
  '08_sh/NS600139.jpg',
  '08_sh/NS600295.jpg',
  '08_sh/NS600298.jpg',
  '08_sh/NS600424.jpg',
  '08_sh/NS600467.jpg',
  '08_sh/NS600471.jpg',
  '08_sh/NS600587.jpg',
  '08_sh/NS600602.jpg',
  '08_sh/NS600712.jpg',
  '08_sh/NS600823.jpg',
  '08_sh/NS601044.jpg',
  '08_sh/NS601176.jpg',
  '08_sh/NS601212.jpg',
  '08_sh/NS601267.jpg',
  '08_sh/NS601344.jpg',
  '08_sh/NS601465.jpg',
  '08_sh/NS601504.jpg',
  '08_sh/NS601521.jpg',
  '08_sh/NS601525.jpg',
  '08_sh/NS601536.jpg',
  '08_sh/NS601567.jpg',
  '08_sh/NS601611.jpg',
  '08_sh/NS601661.jpg',
  '08_sh/NS601708.jpg',
  '08_sh/NS601730.jpg',
  '08_sh/NS601826.jpg',
  '08_sh/NS700012.jpg',
  '08_sh/NS700040.jpg',
  '08_sh/NS700122.jpg',
  '08_sh/NS700306.jpg',
  '08_sh/NS700409.jpg',
  '08_sh/NS700509.jpg',
  '08_sh/NS700575.jpg',
];


/* ============================================================
   BUILD GRID
============================================================ */
const grid = document.getElementById('photoGrid');

PHOTOS.forEach((relPath, idx) => {
  // encodeURI handles spaces & non-ASCII characters in paths
  const src = encodeURI(`${BASE_PATH}/${relPath}`);

  const cell = document.createElement('div');
  cell.className = 'grid-cell';
  cell.setAttribute('role', 'button');
  cell.setAttribute('tabindex', '0');
  cell.setAttribute('aria-label', `Open photo ${idx + 1}`);

  const img = document.createElement('img');
  img.src     = src;
  img.alt     = `Photo ${idx + 1}`;
  img.loading = 'lazy';

  cell.appendChild(img);
  cell.addEventListener('click', () => openLightbox(idx));
  cell.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') openLightbox(idx);
  });
  grid.appendChild(cell);
});


/* ============================================================
   LIGHTBOX
============================================================ */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lb-img');
const lbCounter = document.getElementById('lb-counter');
let currentIdx  = 0;

function openLightbox(idx) {
  currentIdx = idx;
  showPhoto();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function showPhoto() {
  lbImg.src             = encodeURI(`${BASE_PATH}/${PHOTOS[currentIdx]}`);
  lbImg.alt             = `Photo ${currentIdx + 1}`;
  lbCounter.textContent = `${currentIdx + 1} / ${PHOTOS.length}`;
}

function prevPhoto() {
  currentIdx = (currentIdx - 1 + PHOTOS.length) % PHOTOS.length;
  showPhoto();
}

function nextPhoto() {
  currentIdx = (currentIdx + 1) % PHOTOS.length;
  showPhoto();
}

document.getElementById('lb-prev').addEventListener('click', prevPhoto);
document.getElementById('lb-next').addEventListener('click', nextPhoto);
document.getElementById('lb-close').addEventListener('click', closeLightbox);

// Keyboard: Escape = close, arrow keys = navigate
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  prevPhoto();
  if (e.key === 'ArrowRight') nextPhoto();
});
