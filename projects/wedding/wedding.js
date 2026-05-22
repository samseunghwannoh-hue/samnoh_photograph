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
const BASE_PATH = '../../images/05_wedding';

const GROUPS = [
  {
    label: '01',
    basePath: '01_/photos',
    photos: [
      '1-1.jpg',
      '1-10.jpg',
      '1-12.jpg',
      '1-13.jpg',
      '1-14.jpg',
      '1-16.jpg',
      '1-18.jpg',
      '1-19.jpg',
      '1-20.jpg',
      '1-21.jpg',
      '1-22.jpg',
      '1-23.jpg',
      '1-24.jpg',
      '1-25.jpg',
      '1-27.jpg',
      '1-28.jpg',
      '1-29.jpg',
      '1-3.jpg',
      '1-30.jpg',
      '1-31.jpg',
      '1-32.jpg',
      '1-33.jpg',
      '1-34.jpg',
      '1-35.jpg',
      '1-36.jpg',
      '1-37.jpg',
      '1-38.jpg',
      '1-39.jpg',
      '1-4.jpg',
      '1-5.jpg',
      '1-7.jpg',
      '1-8.jpg',
    ],
  },
  {
    label: '02',
    basePath: '02_',
    photos: [
      '1-1.jpg',
      '1-10.jpg',
      '1-11.jpg',
      '1-12.jpg',
      '1-13.jpg',
      '1-14.jpg',
      '1-15.jpg',
      '1-16.jpg',
      '1-17.jpg',
      '1-2.jpg',
      '1-4.jpg',
      '1-5.jpg',
      '1-6.jpg',
      '1-7.jpg',
      '1-8.jpg',
      '1-9.jpg',
    ],
  },
  {
    label: '03',
    basePath: '03_',
    photos: [
      '1-1.jpg',
      '1-10.jpg',
      '1-11.jpg',
      '1-12.jpg',
      '1-13.jpg',
      '1-14.jpg',
      '1-15.jpg',
      '1-16.jpg',
      '1-17.jpg',
      '1-2.jpg',
      '1-3.jpg',
      '1-4.jpg',
      '1-5.jpg',
      '1-6.jpg',
      '1-7.jpg',
      '1-8.jpg',
      '1-9.jpg',
    ],
  },
];


/* ============================================================
   GRID RENDERING
============================================================ */
const grid        = document.getElementById('photoGrid');
let   displayPhotos = []; // flat ordered list for lightbox navigation

function createEmptyCell() {
  const cell = document.createElement('div');
  cell.className = 'grid-cell grid-cell--empty';
  return cell;
}

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

    let rowCount = 0;
    group.photos.forEach(filename => {
      const src = `${BASE_PATH}/${group.basePath}/${filename}`;
      const idx = displayPhotos.length;
      displayPhotos.push({ src, label: group.label });
      groupGrid.appendChild(createCell(src, group.label, idx));
      groupGrid.appendChild(createEmptyCell());
      rowCount++;
      if (rowCount % 8 === 0) {
        for (let i = 0; i < 16; i++) groupGrid.appendChild(createEmptyCell());
      }
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
