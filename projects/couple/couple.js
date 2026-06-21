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
   BASE_PATH — parent folder of all location-time subfolders,
               relative to this HTML file.
   PHOTOS    — every image path relative to BASE_PATH.
               The folder name encodes location and time:
                 LOCATION_time   e.g. BK_morning
                 LOCATION-time   e.g. CS-afternoon
               To swap projects: change BASE_PATH and replace
               the PHOTOS array.
============================================================ */
const BASE_PATH = '../../images/02_couple';

const PHOTOS = [
  /* Brooklyn — Afternoon / Sunset */
  'Brooklyn_Afternoon-sunset/1-1.jpg',
  'Brooklyn_Afternoon-sunset/1-2.jpg',
  'Brooklyn_Afternoon-sunset/2-2.jpg',
  'Brooklyn_Afternoon-sunset/2-3-1.jpg',
  'Brooklyn_Afternoon-sunset/2-3.jpg',
  'Brooklyn_Afternoon-sunset/2-4.jpg',
  'Brooklyn_Afternoon-sunset/2-5.jpg',
  'Brooklyn_Afternoon-sunset/2-6.jpg',
  'Brooklyn_Afternoon-sunset/2-7.jpg',
  'Brooklyn_Afternoon-sunset/2-8.jpg',
  'Brooklyn_Afternoon-sunset/3-0-1.jpg',
  'Brooklyn_Afternoon-sunset/3-0.jpg',
  'Brooklyn_Afternoon-sunset/3-1-1.jpg',
  'Brooklyn_Afternoon-sunset/3-1.jpg',
  'Brooklyn_Afternoon-sunset/3-2-1.jpg',
  'Brooklyn_Afternoon-sunset/3-2.jpg',
  'Brooklyn_Afternoon-sunset/3-3-1.jpg',
  'Brooklyn_Afternoon-sunset/3-3.jpg',
  'Brooklyn_Afternoon-sunset/3-5-1.jpg',
  'Brooklyn_Afternoon-sunset/3-5.jpg',
  'Brooklyn_Afternoon-sunset/3-6.jpg',
  'Brooklyn_Afternoon-sunset/3-7.jpg',
  'Brooklyn_Afternoon-sunset/3-8.jpg',
  'Brooklyn_Afternoon-sunset/3-9.jpg',
  'Brooklyn_Afternoon-sunset/4-0.jpg',
  'Brooklyn_Afternoon-sunset/4-1-1.jpg',
  'Brooklyn_Afternoon-sunset/4-1.jpg',
  'Brooklyn_Afternoon-sunset/4-10.jpg',
  'Brooklyn_Afternoon-sunset/4-11.jpg',
  'Brooklyn_Afternoon-sunset/4-12.jpg',
  'Brooklyn_Afternoon-sunset/4-13.jpg',
  'Brooklyn_Afternoon-sunset/4-2.jpg',
  'Brooklyn_Afternoon-sunset/4-3-1.jpg',
  'Brooklyn_Afternoon-sunset/4-3.jpg',
  'Brooklyn_Afternoon-sunset/4-4.jpg',
  'Brooklyn_Afternoon-sunset/4-5.jpg',
  'Brooklyn_Afternoon-sunset/4-6.jpg',
  'Brooklyn_Afternoon-sunset/4-7.jpg',

  /* Brooklyn — Morning */
  'Brooklyn_morning/1-10.jpg',
  'Brooklyn_morning/1-11.jpg',
  'Brooklyn_morning/1-2.jpg',
  'Brooklyn_morning/1-4.jpg',
  'Brooklyn_morning/1-5.jpg',
  'Brooklyn_morning/1-7.jpg',
  'Brooklyn_morning/1-8.jpg',
  'Brooklyn_morning/1-9.jpg',
  'Brooklyn_morning/1.jpg',
  'Brooklyn_morning/2-1.jpg',
  'Brooklyn_morning/2-10.jpg',
  'Brooklyn_morning/2-12.jpg',
  'Brooklyn_morning/2-2.jpg',
  'Brooklyn_morning/2-3.jpg',
  'Brooklyn_morning/2-4.jpg',
  'Brooklyn_morning/2-5.jpg',
  'Brooklyn_morning/2-6.jpg',
  'Brooklyn_morning/2-7.jpg',
  'Brooklyn_morning/2-9.jpg',
  'Brooklyn_morning/3-1.jpg',
  'Brooklyn_morning/3-11.jpg',
  'Brooklyn_morning/3-12.jpg',
  'Brooklyn_morning/3-13.jpg',
  'Brooklyn_morning/3-15.jpg',
  'Brooklyn_morning/3-17.jpg',
  'Brooklyn_morning/3-2.jpg',
  'Brooklyn_morning/3-4.jpg',
  'Brooklyn_morning/3-5.jpg',
  'Brooklyn_morning/3-6.jpg',
  'Brooklyn_morning/3-7.jpg',
  'Brooklyn_morning/4-1.jpg',
  'Brooklyn_morning/4-12.jpg',
  'Brooklyn_morning/4-13.jpg',
  'Brooklyn_morning/4-14.jpg',
  'Brooklyn_morning/4-15.jpg',
  'Brooklyn_morning/4-2.jpg',
  'Brooklyn_morning/4-3.jpg',
  'Brooklyn_morning/4-5.jpg',
  'Brooklyn_morning/4-7.jpg',
  'Brooklyn_morning/4-8.jpg',
  'Brooklyn_morning/4-9.jpg',
  'Brooklyn_morning/5-1.jpg',
  'Brooklyn_morning/5-2.jpg',
  'Brooklyn_morning/5-3.jpg',
  'Brooklyn_morning/5-4.jpg',
  'Brooklyn_morning/5-5.jpg',
  'Brooklyn_morning/5-6.jpg',

  /* Central Park — Afternoon */
  'Central park_afternoon/1-1.jpg',
  'Central park_afternoon/1-10.jpg',
  'Central park_afternoon/1-11.jpg',
  'Central park_afternoon/1-12.jpg',
  'Central park_afternoon/1-2.jpg',
  'Central park_afternoon/1-3.jpg',
  'Central park_afternoon/1-4.jpg',
  'Central park_afternoon/1-5.jpg',
  'Central park_afternoon/1-6.jpg',
  'Central park_afternoon/1-7.jpg',
  'Central park_afternoon/1-8.jpg',
  'Central park_afternoon/1-9.jpg',
  'Central park_afternoon/2-1.jpg',
  'Central park_afternoon/2-2.jpg',
  'Central park_afternoon/2-3.jpg',
  'Central park_afternoon/2-4.jpg',
  'Central park_afternoon/2-5.jpg',
  'Central park_afternoon/3-1.jpg',
  'Central park_afternoon/3-10.jpg',
  'Central park_afternoon/3-2.jpg',
  'Central park_afternoon/3-3.jpg',
  'Central park_afternoon/3-6.jpg',
  'Central park_afternoon/3-7.jpg',
  'Central park_afternoon/3-9.jpg',

  /* Central Park — Morning */
  'Central park_morning/1-1.jpg',
  'Central park_morning/1-12.jpg',
  'Central park_morning/1-13.jpg',
  'Central park_morning/1-16.jpg',
  'Central park_morning/1-3.jpg',
  'Central park_morning/1-4.jpg',
  'Central park_morning/1-5.jpg',
  'Central park_morning/1-6.jpg',
  'Central park_morning/1-9.jpg',

  /* City Hall — Afternoon */
  'City hall-afternoon/1-1.jpg',
  'City hall-afternoon/1-10.jpg',
  'City hall-afternoon/1-11.jpg',
  'City hall-afternoon/1-14.jpg',
  'City hall-afternoon/1-15.jpg',
  'City hall-afternoon/1-2.jpg',
  'City hall-afternoon/1-4.jpg',
  'City hall-afternoon/1-5.jpg',
  'City hall-afternoon/1-6.jpg',
  'City hall-afternoon/1-7.jpg',

  /* Greenwich Village — Afternoon / Sunset */
  'Greenwich village_afternoon-sunset/1-10.jpg',
  'Greenwich village_afternoon-sunset/1-11.jpg',
  'Greenwich village_afternoon-sunset/1-13.jpg',
  'Greenwich village_afternoon-sunset/1-15.jpg',
  'Greenwich village_afternoon-sunset/1-16.jpg',
  'Greenwich village_afternoon-sunset/1-17.jpg',
  'Greenwich village_afternoon-sunset/1-2.jpg',
  'Greenwich village_afternoon-sunset/1-3.jpg',
  'Greenwich village_afternoon-sunset/1-4.jpg',
  'Greenwich village_afternoon-sunset/1-6.jpg',
  'Greenwich village_afternoon-sunset/1-7.jpg',
  'Greenwich village_afternoon-sunset/1-9.jpg',

  /* Midtown — Afternoon */
  'Midtown-afternoon/1-2.jpg',
  'Midtown-afternoon/1-3.jpg',
  'Midtown-afternoon/1-6.jpg',
  'Midtown-afternoon/1-7.jpg',
  'Midtown-afternoon/1-8.jpg',

  /* Midtown — Night */
  'Midtown-night/1-1.jpg',
  'Midtown-night/1-10.jpg',
  'Midtown-night/1-11.jpg',
  'Midtown-night/1-12.jpg',
  'Midtown-night/1-13.jpg',
  'Midtown-night/1-2.jpg',
  'Midtown-night/1-3.jpg',
  'Midtown-night/1-4.jpg',
  'Midtown-night/1-5.jpg',
  'Midtown-night/1-6.jpg',
  'Midtown-night/1-7.jpg',
  'Midtown-night/1-8.jpg',
  'Midtown-night/1-9.jpg',
];


/* ============================================================
   PARSE LOCATION & TIME FROM FOLDER NAME
   ============================================================
   Folder format: LOCATION_time  or  LOCATION-time
   Separator is the first _ if present, otherwise first -.
   Examples:
     BK_Afternoon-sunset  →  location: "BK",   time: "afternoon-sunset"
     CS-afternoon         →  location: "CS",   time: "afternoon"
     City-night           →  location: "City", time: "night"
============================================================ */
function parseMeta(relPath) {
  const folder   = relPath.split('/')[0];
  const sepIdx   = folder.includes('_') ? folder.indexOf('_') : folder.indexOf('-');
  const location = folder.slice(0, sepIdx);
  const time     = folder.slice(sepIdx + 1).toLowerCase(); // normalise case
  return { path: relPath, folder, location, time };
}

const PHOTO_DATA = PHOTOS.map(parseMeta);


/* ============================================================
   TIME DISPLAY & SORT ORDER
============================================================ */
const TIME_ORDER = {
  'morning':           0,
  'afternoon':         1,
  'afternoon-sunset':  2,
  'night':             3,
};

const TIME_LABELS = {
  'morning':           'Morning',
  'afternoon':         'Afternoon',
  'afternoon-sunset':  'Afternoon — Sunset',
  'night':             'Night',
};

function formatTime(time) {
  return TIME_LABELS[time] || time;
}

const LOCATION_LABELS = {
  'Brooklyn':          'Brooklyn',
  'Central park':      'Central Park',
  'City hall':         'City Hall',
  'Greenwich village': 'Greenwich Village',
  'Midtown':           'Midtown',
};

function formatLocation(loc) {
  return LOCATION_LABELS[loc] || loc;
}


/* ============================================================
   FILTER STATE
============================================================ */
let activeTime     = null;  // selected time key, or null
let activeLocation = null;  // selected location key, or null
let timePanelOpen  = false;
let placePanelOpen = false;
let displayPhotos  = [];    // photos in current render order — used by lightbox


/* ============================================================
   SUB-FILTER UI
============================================================ */
const filterSubTime  = document.getElementById('filterSubTime');
const filterSubPlace = document.getElementById('filterSubPlace');

function getUniqueTimes() {
  const seen = new Set();
  const result = [];
  PHOTO_DATA.forEach(p => { if (!seen.has(p.time)) { seen.add(p.time); result.push(p.time); } });
  return result.sort((a, b) => (TIME_ORDER[a] ?? 99) - (TIME_ORDER[b] ?? 99));
}

function getUniqueLocations() {
  const seen = new Set();
  const result = [];
  PHOTO_DATA.forEach(p => { if (!seen.has(p.location)) { seen.add(p.location); result.push(p.location); } });
  return result.sort((a, b) => a.localeCompare(b));
}

function renderSubTime() {
  filterSubTime.innerHTML = '';
  if (!timePanelOpen) return;
  getUniqueTimes().forEach(time => {
    const btn = document.createElement('button');
    btn.className = 'filter-sub-btn' + (activeTime === time ? ' active' : '');
    btn.textContent = formatTime(time);
    btn.addEventListener('click', () => {
      activeTime = (activeTime === time) ? null : time;
      renderSubTime();
      renderGrid();
    });
    filterSubTime.appendChild(btn);
  });
}

function renderSubPlace() {
  filterSubPlace.innerHTML = '';
  if (!placePanelOpen) return;
  getUniqueLocations().forEach(loc => {
    const btn = document.createElement('button');
    btn.className = 'filter-sub-btn' + (activeLocation === loc ? ' active' : '');
    btn.textContent = formatLocation(loc);
    btn.addEventListener('click', () => {
      activeLocation = (activeLocation === loc) ? null : loc;
      renderSubPlace();
      renderGrid();
    });
    filterSubPlace.appendChild(btn);
  });
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

  const filtered = PHOTO_DATA.filter(p =>
    (!activeTime     || p.time     === activeTime) &&
    (!activeLocation || p.location === activeLocation)
  );

  const groupGrid = document.createElement('div');
  groupGrid.className = 'group-grid';
  let rowCount = 0;
  filtered.forEach(photo => {
    const idx = displayPhotos.length;
    displayPhotos.push(photo);
    groupGrid.appendChild(createCell(photo, idx));
    groupGrid.appendChild(createEmptyCell());
    rowCount++;
    if (rowCount % 4 === 0) {
      const rs = document.createElement('div');
      rs.className = 'grid-row-spacer';
      groupGrid.appendChild(rs);
    }
  });
  grid.appendChild(groupGrid);
}


/* ============================================================
   FILTER BUTTONS
============================================================ */
document.getElementById('btnTime').addEventListener('click', function () {
  timePanelOpen = !timePanelOpen;
  if (!timePanelOpen) { activeTime = null; }
  this.classList.toggle('active', timePanelOpen);
  renderSubTime();
  renderGrid();
});

document.getElementById('btnPlace').addEventListener('click', function () {
  placePanelOpen = !placePanelOpen;
  if (!placePanelOpen) { activeLocation = null; }
  this.classList.toggle('active', placePanelOpen);
  renderSubPlace();
  renderGrid();
});

renderGrid(); // initial render


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
