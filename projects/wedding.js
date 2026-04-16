/* ============================================================
   INTRO OVERLAY — "Wedding" fades out after 3 s
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
   BASE_PATH — parent folder relative to this HTML file.
   GROUPS    — ordered array of { label, basePath, photos }
               basePath is relative to BASE_PATH.
============================================================ */
const BASE_PATH = '../images/05_wedding';

const GROUPS = [
  {
    label: 'Merve',
    basePath: 'Merve',
    photos: [
      'NS500896.jpg',
      'NS501017.jpg',
      'NS501037.jpg',
      'NS501112.jpg',
      'NS501700.jpg',
      'NS501783.jpg',
      'NS501824.jpg',
      'NS501919.jpg',
      'NS501988.jpg',
      'NS608344.jpg',
      'NS608492.jpg',
      'NS608537.jpg',
      'NS609110.jpg',
      'NS609232.jpg',
      'NS609460.jpg',
      'NS609631.jpg',
      'NS609681.jpg',
      'NS609788.jpg',
    ],
  },
  {
    label: 'Racheal',
    basePath: 'Racheal/photos',
    photos: [
      'NS600100.jpg',
      'NS600134.jpg',
      'NS600197.jpg',
      'NS600238.jpg',
      'NS600265.jpg',
      'NS600279.jpg',
      'NS600362.jpg',
      'NS600379.jpg',
      'NS600388.jpg',
      'NS600417.jpg',
      'NS600435.jpg',
      'NS600474.jpg',
      'NS600521.jpg',
      'NS600534.jpg',
      'NS600564.jpg',
      'NS600592.jpg',
      'NS600645.jpg',
      'NS600690.jpg',
      'NS600751.jpg',
      'NS600794.jpg',
      'NS600843.jpg',
      'NS600858.jpg',
      'NS600891.jpg',
      'NS600949.jpg',
      'NS600961.jpg',
      'NS600963.jpg',
      'NS600990.jpg',
      'NS601007.jpg',
      'NS601046.jpg',
      'NS601066.jpg',
      'NS601095.jpg',
      'NS601113.jpg',
      'NS601149.jpg',
      'NS601216.jpg',
      'NS601226.jpg',
      'NS601251.jpg',
      'NS601254.jpg',
      'NS601297.jpg',
      'NS601317.jpg',
      'NS601354.jpg',
      'NS601362.jpg',
      'NS601372.jpg',
      'NS601413.jpg',
      'NS601420.jpg',
      'NS601453.jpg',
      'NS601463.jpg',
      'NS601487.jpg',
      'NS700007.jpg',
      'NS700135.jpg',
      'NS700137.jpg',
      'NS700162.jpg',
      'NS700194.jpg',
      'NS700213.jpg',
      'NS700215.jpg',
      'NS700232.jpg',
      'NS700238.jpg',
      'NS700256.jpg',
      'NS700276.jpg',
      'NS700326.jpg',
      'NS700372.jpg',
      'NS700398.jpg',
      'NS700403.jpg',
      'NS700492.jpg',
      'NS700494.jpg',
      'NS700528.jpg',
      'NS700560.jpg',
      'NS700580.jpg',
      'NS700608.jpg',
      'NS700656.jpg',
      'NS700670.jpg',
      'NS700675.jpg',
      'NS700710.jpg',
      'NS700712.jpg',
      'NS700747.jpg',
      'NS700788.jpg',
      'NS700792.jpg',
      'NS700799.jpg',
      'NS700840.jpg',
      'NS700844.jpg',
      'NS700849.jpg',
      'NS700872.jpg',
      'NS700881.jpg',
      'NS700893.jpg',
      'NS700906.jpg',
    ],
  },
];


/* ============================================================
   GRID RENDERING
============================================================ */
const grid        = document.getElementById('photoGrid');
let   displayPhotos = []; // flat ordered list for lightbox navigation

function createCell(src, label, displayIdx) {
  const cell = document.createElement('div');
  cell.className = 'grid-cell';
  cell.setAttribute('role', 'button');
  cell.setAttribute('tabindex', '0');

  const img   = document.createElement('img');
  img.src     = encodeURI(src);
  img.alt     = label;
  img.loading = 'lazy';

  cell.appendChild(img);
  cell.addEventListener('click',   ()  => openLightbox(displayIdx));
  cell.addEventListener('keydown', e   => {
    if (e.key === 'Enter' || e.key === ' ') openLightbox(displayIdx);
  });
  return cell;
}

function renderGrid() {
  grid.innerHTML  = '';
  displayPhotos   = [];

  GROUPS.forEach(group => {
    const groupEl = document.createElement('div');
    groupEl.className = 'photo-group';

    const labelEl = document.createElement('div');
    labelEl.className   = 'group-label';
    labelEl.textContent = group.label;
    groupEl.appendChild(labelEl);

    const groupGrid = document.createElement('div');
    groupGrid.className = 'group-grid';

    group.photos.forEach(filename => {
      const src = `${BASE_PATH}/${group.basePath}/${filename}`;
      const idx = displayPhotos.length;
      displayPhotos.push({ src, label: group.label });
      groupGrid.appendChild(createCell(src, group.label, idx));
    });

    groupEl.appendChild(groupGrid);
    grid.appendChild(groupEl);
  });
}

renderGrid();


/* ============================================================
   LIGHTBOX
============================================================ */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lb-img');
const lbCounter = document.getElementById('lb-counter');
let   currentIdx = 0;

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
  const photo           = displayPhotos[currentIdx];
  lbImg.src             = encodeURI(photo.src);
  lbImg.alt             = photo.label;
  lbCounter.textContent = `${currentIdx + 1} / ${displayPhotos.length}`;
}

function prevPhoto() {
  currentIdx = (currentIdx - 1 + displayPhotos.length) % displayPhotos.length;
  showPhoto();
}

function nextPhoto() {
  currentIdx = (currentIdx + 1) % displayPhotos.length;
  showPhoto();
}

document.getElementById('lb-prev').addEventListener('click', prevPhoto);
document.getElementById('lb-next').addEventListener('click', nextPhoto);
document.getElementById('lb-close').addEventListener('click', closeLightbox);

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  prevPhoto();
  if (e.key === 'ArrowRight') nextPhoto();
});
