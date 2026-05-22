/* ============================================================
   INTRO OVERLAY — "Family" fades out after 3 s
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
   BASE_PATH — parent folder of all location-time subfolders,
               relative to this HTML file.
   PHOTOS    — every image path relative to BASE_PATH.
               Folder name format: LOCATION_time or LOCATION-time
               To swap projects: change BASE_PATH and PHOTOS.
============================================================ */
const BASE_PATH = '../../images/03_family';

const PHOTOS = [
  /* Brooklyn — Morning */
  'Brooklyn_morning/1-1.jpg',
  'Brooklyn_morning/1-2.jpg',
  'Brooklyn_morning/1-3.jpg',
  'Brooklyn_morning/1-4.jpg',
  'Brooklyn_morning/1-5.jpg',
  'Brooklyn_morning/1-6.jpg',
  'Brooklyn_morning/1-7.jpg',
  'Brooklyn_morning/1-8.jpg',

  /* Central Park — Afternoon */
  'Central park_afternoon/1-1.jpg',
  'Central park_afternoon/1-2.jpg',
  'Central park_afternoon/1-3.jpg',
  'Central park_afternoon/1-4.jpg',
  'Central park_afternoon/1-5.jpg',
  'Central park_afternoon/1-6.jpg',
  'Central park_afternoon/1-7.jpg',
  'Central park_afternoon/1-8.jpg',
  'Central park_afternoon/2-10.jpg',
  'Central park_afternoon/2-11.jpg',
  'Central park_afternoon/2-3.jpg',
  'Central park_afternoon/2-4.jpg',
  'Central park_afternoon/2-5.jpg',
  'Central park_afternoon/2-6.jpg',
  'Central park_afternoon/2-8.jpg',
  'Central park_afternoon/2-9.jpg',
  'Central park_afternoon/3-1.jpg',
  'Central park_afternoon/3-12.jpg',
  'Central park_afternoon/3-14.jpg',
  'Central park_afternoon/3-15.jpg',
  'Central park_afternoon/3-5.jpg',
  'Central park_afternoon/3-6.jpg',
  'Central park_afternoon/3-7.jpg',

  /* Central Park — Morning */
  'Central park_morning/1-10.jpg',
  'Central park_morning/1-11.jpg',
  'Central park_morning/1-12.jpg',
  'Central park_morning/1-14.jpg',
  'Central park_morning/1-15.jpg',
  'Central park_morning/1-2.jpg',
  'Central park_morning/1-4.jpg',
  'Central park_morning/1-5.jpg',
  'Central park_morning/1-6.jpg',
  'Central park_morning/1-8.jpg',
  'Central park_morning/1-9.jpg',
  'Central park_morning/2-1.jpg',
  'Central park_morning/2-10.jpg',
  'Central park_morning/2-13.jpg',
  'Central park_morning/2-3.jpg',
  'Central park_morning/2-4.jpg',
  'Central park_morning/2-5.jpg',
  'Central park_morning/2-7.jpg',
  'Central park_morning/2-9.jpg',
  'Central park_morning/3-1.jpg',
  'Central park_morning/3-10.jpg',
  'Central park_morning/3-11.jpg',
  'Central park_morning/3-13.jpg',
  'Central park_morning/3-14.jpg',
  'Central park_morning/3-2.jpg',
  'Central park_morning/3-3.jpg',
  'Central park_morning/3-4.jpg',
  'Central park_morning/3-5.jpg',
  'Central park_morning/3-7.jpg',
  'Central park_morning/3-9.jpg',

  /* Home — Morning */
  'Home_morning/1-1.jpg',
  'Home_morning/1-10.jpg',
  'Home_morning/1-12.jpg',
  'Home_morning/1-14.jpg',
  'Home_morning/1-15.jpg',
  'Home_morning/1-17.jpg',
  'Home_morning/1-19.jpg',
  'Home_morning/1-2.jpg',
  'Home_morning/1-20.jpg',
  'Home_morning/1-21.jpg',
  'Home_morning/1-22.jpg',
  'Home_morning/1-23.jpg',
  'Home_morning/1-25.jpg',
  'Home_morning/1-26.jpg',
  'Home_morning/1-3.jpg',
  'Home_morning/1-30.jpg',
  'Home_morning/1-4.jpg',
  'Home_morning/1-9.jpg',
  'Home_morning/2-1.jpg',
  'Home_morning/2-10.jpg',
  'Home_morning/2-11.jpg',
  'Home_morning/2-2.jpg',
  'Home_morning/2-3.jpg',
  'Home_morning/2-4.jpg',
  'Home_morning/2-5.jpg',
  'Home_morning/2-6.jpg',
  'Home_morning/2-7.jpg',
  'Home_morning/2-8.jpg',
  'Home_morning/2-9.jpg',

  /* State Park — Afternoon */
  'State Park_afternoon/1-1.jpg',
  'State Park_afternoon/1-10.jpg',
  'State Park_afternoon/1-2.jpg',
  'State Park_afternoon/1-3.jpg',
  'State Park_afternoon/1-4.jpg',
  'State Park_afternoon/1-5.jpg',
  'State Park_afternoon/1-6.jpg',
  'State Park_afternoon/1-8.jpg',
  'State Park_afternoon/1-9-1.jpg',
  'State Park_afternoon/1-9.jpg',
];


/* ============================================================
   PARSE LOCATION & TIME FROM FOLDER NAME
   Folder format: LOCATION_time  or  LOCATION-time
   Separator: first _ if present, else first -.
   Note: "State Park_afternoon" correctly parses to
         location "State Park", time "afternoon".
============================================================ */
function parseMeta(relPath) {
  const folder   = relPath.split('/')[0];
  const sepIdx   = folder.includes('_') ? folder.indexOf('_') : folder.indexOf('-');
  const location = folder.slice(0, sepIdx);
  const time     = folder.slice(sepIdx + 1).toLowerCase();
  return { path: relPath, folder, location, time };
}

const PHOTO_DATA = PHOTOS.map(parseMeta);


/* ============================================================
   TIME DISPLAY & SORT ORDER
============================================================ */
const TIME_ORDER  = { 'morning': 0, 'afternoon': 1 };
const TIME_LABELS = { 'morning': 'Morning', 'afternoon': 'Afternoon' };

function formatTime(time) { return TIME_LABELS[time] || time; }

const LOCATION_LABELS = {
  'Brooklyn':    'Brooklyn',
  'Central park': 'Central Park',
  'Home':        'Home',
  'State Park':  'State Park',
};

function formatLocation(loc) { return LOCATION_LABELS[loc] || loc; }


/* ============================================================
   FILTER STATE
============================================================ */
let filterLocation = false;
let filterTime     = false;
let displayPhotos  = [];


/* ============================================================
   GROUPING & SORTING
============================================================ */
function buildGroups() {
  const groups = {};
  PHOTO_DATA.forEach(photo => {
    const key = filterLocation && filterTime ? `${photo.location}||${photo.time}`
              : filterLocation               ? photo.location
              :                                photo.time;
    if (!groups[key]) groups[key] = [];
    groups[key].push(photo);
  });
  return groups;
}

function compareKeys(a, b) {
  if (filterLocation && filterTime) {
    const [locA, timeA] = a.split('||');
    const [locB, timeB] = b.split('||');
    const c = locA.localeCompare(locB);
    if (c !== 0) return c;
    return (TIME_ORDER[timeA] ?? 99) - (TIME_ORDER[timeB] ?? 99);
  }
  if (filterTime) return (TIME_ORDER[a] ?? 99) - (TIME_ORDER[b] ?? 99);
  return a.localeCompare(b);
}

function formatKey(key) {
  if (filterLocation && filterTime) {
    const [loc, time] = key.split('||');
    return `${formatLocation(loc)}  —  ${formatTime(time)}`;
  }
  if (filterTime) return formatTime(key);
  return formatLocation(key);
}


/* ============================================================
   GRID RENDERING
============================================================ */
const grid = document.getElementById('photoGrid');

function createEmptyCell() {
  const cell = document.createElement('div');
  cell.className = 'grid-cell grid-cell--empty';
  return cell;
}

function createCell(photo, displayIdx) {
  const src  = encodeURI(`${BASE_PATH}/${photo.path}`);
  const cell = document.createElement('div');
  cell.className = 'grid-cell';
  cell.setAttribute('role', 'button');
  cell.setAttribute('tabindex', '0');
  const img   = document.createElement('img');
  img.src     = src;
  img.alt     = photo.location;
  img.loading = 'lazy';
  cell.appendChild(img);
  cell.addEventListener('click',   ()  => openLightbox(displayIdx));
  cell.addEventListener('keydown', e   => {
    if (e.key === 'Enter' || e.key === ' ') openLightbox(displayIdx);
  });
  return cell;
}

function renderGrid() {
  grid.innerHTML = '';
  displayPhotos  = [];

  if (!filterLocation && !filterTime) {
    const groupGrid = document.createElement('div');
    groupGrid.className = 'group-grid';
    let rowCount = 0;
    PHOTO_DATA.forEach(photo => {
      const idx = displayPhotos.length;
      displayPhotos.push(photo);
      groupGrid.appendChild(createCell(photo, idx));
      groupGrid.appendChild(createEmptyCell());
      rowCount++;
      if (rowCount % 8 === 0) {
        for (let i = 0; i < 16; i++) groupGrid.appendChild(createEmptyCell());
      }
    });
    grid.appendChild(groupGrid);
    return;
  }

  Object.keys(buildGroups()).sort(compareKeys).forEach(key => {
    const groupEl = document.createElement('div');
    groupEl.className = 'photo-group';
    const labelEl = document.createElement('div');
    labelEl.className   = 'group-label';
    labelEl.textContent = formatKey(key);
    groupEl.appendChild(labelEl);
    const groupGrid = document.createElement('div');
    groupGrid.className = 'group-grid';
    let rowCount = 0;
    buildGroups()[key].forEach(photo => {
      const idx = displayPhotos.length;
      displayPhotos.push(photo);
      groupGrid.appendChild(createCell(photo, idx));
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


/* ============================================================
   FILTER BUTTONS
============================================================ */
document.getElementById('btnPlace').addEventListener('click', function () {
  filterLocation = !filterLocation;
  this.classList.toggle('active', filterLocation);
  renderGrid();
});
document.getElementById('btnTime').addEventListener('click', function () {
  filterTime = !filterTime;
  this.classList.toggle('active', filterTime);
  renderGrid();
});

renderGrid();


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
  const photo           = displayPhotos[currentIdx];
  lbImg.src             = encodeURI(`${BASE_PATH}/${photo.path}`);
  lbImg.alt             = photo.location;
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
