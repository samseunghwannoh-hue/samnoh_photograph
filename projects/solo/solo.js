/* ============================================================
   INTRO OVERLAY — "Solo" fades out after 3 s
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
               Folder name format: LOCATION_time
               Special case: WB_afternoon(cloudy) parses to
               location "WB", time "afternoon(cloudy)".
               To swap projects: change BASE_PATH and PHOTOS.
============================================================ */
const BASE_PATH = '../../images/04_Solo';

const PHOTOS = [
  /* Brooklyn — Afternoon */
  'Brooklyn_afternoon/1-1.JPG',
  'Brooklyn_afternoon/1-10.JPG',
  'Brooklyn_afternoon/1-11.JPG',
  'Brooklyn_afternoon/1-12.JPG',
  'Brooklyn_afternoon/1-13.JPG',
  'Brooklyn_afternoon/1-14.jpg',
  'Brooklyn_afternoon/1-2.JPG',
  'Brooklyn_afternoon/1-3.JPG',
  'Brooklyn_afternoon/1-4.JPG',
  'Brooklyn_afternoon/1-5.JPG',
  'Brooklyn_afternoon/1-6.JPG',
  'Brooklyn_afternoon/1-7.JPG',
  'Brooklyn_afternoon/1-8.JPG',
  'Brooklyn_afternoon/1-9.JPG',

  /* Brooklyn — Morning */
  'Brooklyn_morning/1-1.jpg',
  'Brooklyn_morning/1-10.jpg',
  'Brooklyn_morning/1-11.jpg',
  'Brooklyn_morning/1-12.jpg',
  'Brooklyn_morning/1-13.jpg',
  'Brooklyn_morning/1-2.jpg',
  'Brooklyn_morning/1-3.jpg',
  'Brooklyn_morning/1-4.jpg',
  'Brooklyn_morning/1-5.jpg',
  'Brooklyn_morning/1-6.jpg',
  'Brooklyn_morning/1-7.jpg',
  'Brooklyn_morning/1-8.jpg',
  'Brooklyn_morning/1-9.jpg',

  /* Central Park — Morning */
  'Central park_morning/1-1.jpg',
  'Central park_morning/1-10.jpg',
  'Central park_morning/1-11.jpg',
  'Central park_morning/1-14.jpg',
  'Central park_morning/1-3.jpg',
  'Central park_morning/1-5.jpg',
  'Central park_morning/1-7.jpg',
  'Central park_morning/1-8.jpg',
  'Central park_morning/1-9.jpg',
  'Central park_morning/2-11.jpg',
  'Central park_morning/2-12.jpg',
  'Central park_morning/2-14.jpg',
  'Central park_morning/2-16.jpg',
  'Central park_morning/2-5.jpg',
  'Central park_morning/2-8.jpg',
  'Central park_morning/2-9.jpg',

  /* Central Park — Sunset */
  'Central park_sunset/1-1.jpg',
  'Central park_sunset/1-2.jpg',
  'Central park_sunset/1-3.jpg',
  'Central park_sunset/1-4.jpg',
  'Central park_sunset/1-5.jpg',
  'Central park_sunset/1-6.jpg',
  'Central park_sunset/1-7.jpg',
  'Central park_sunset/1-8.jpg',
  'Central park_sunset/1-9.jpg',

  /* Chelsea — Sunset */
  'Chealsea_sunset/1-1.jpg',
  'Chealsea_sunset/1-10.jpg',
  'Chealsea_sunset/1-11-1.jpg',
  'Chealsea_sunset/1-11.jpg',
  'Chealsea_sunset/1-12.jpg',
  'Chealsea_sunset/1-13.jpg',
  'Chealsea_sunset/1-14.jpg',
  'Chealsea_sunset/1-15.jpg',
  'Chealsea_sunset/1-16.jpg',
  'Chealsea_sunset/1-17.jpg',
  'Chealsea_sunset/1-18.jpg',
  'Chealsea_sunset/1-19.jpg',
  'Chealsea_sunset/1-2.jpg',
  'Chealsea_sunset/1-20.jpg',
  'Chealsea_sunset/1-21.jpg',
  'Chealsea_sunset/1-23.jpg',
  'Chealsea_sunset/1-24.jpg',
  'Chealsea_sunset/1-25.jpg',
  'Chealsea_sunset/1-27.jpg',
  'Chealsea_sunset/1-3.jpg',
  'Chealsea_sunset/1-4.jpg',
  'Chealsea_sunset/1-5.jpg',
  'Chealsea_sunset/1-6.jpg',
  'Chealsea_sunset/1-8.jpg',
  'Chealsea_sunset/1-9.jpg',

  /* Columbia University — Afternoon */
  'Columbia University_afternoon/1-1.jpg',
  'Columbia University_afternoon/1-2.jpg',
  'Columbia University_afternoon/1-3.jpg',
  'Columbia University_afternoon/1-4.jpg',
  'Columbia University_afternoon/1-5.jpg',
  'Columbia University_afternoon/1-6.jpg',
  'Columbia University_afternoon/1-7.jpg',
  'Columbia University_afternoon/2-1.jpg',
  'Columbia University_afternoon/2-2.jpg',
  'Columbia University_afternoon/2-3.jpg',
  'Columbia University_afternoon/2-4.jpg',
  'Columbia University_afternoon/2-5.jpg',
  'Columbia University_afternoon/2-6.jpg',
  'Columbia University_afternoon/2-7.jpg',
  'Columbia University_afternoon/2-8.jpg',

  /* Coney Island — Afternoon */
  'Coney Island_afternoon/1-1.jpg',
  'Coney Island_afternoon/1-10.jpg',
  'Coney Island_afternoon/1-11.jpg',
  'Coney Island_afternoon/1-12.jpg',
  'Coney Island_afternoon/1-13.jpg',
  'Coney Island_afternoon/1-2.jpg',
  'Coney Island_afternoon/1-3.jpg',
  'Coney Island_afternoon/1-4.jpg',
  'Coney Island_afternoon/1-5.jpg',
  'Coney Island_afternoon/1-6.jpg',
  'Coney Island_afternoon/1-7.jpg',
  'Coney Island_afternoon/1-8.jpg',
  'Coney Island_afternoon/1-9.jpg',

  /* Williamsburg — Afternoon (Cloudy) */
  'Williamsburg_afternoon(cloudy)/1-1.jpg',
  'Williamsburg_afternoon(cloudy)/1-2.jpg',
  'Williamsburg_afternoon(cloudy)/1-3.jpg',
  'Williamsburg_afternoon(cloudy)/1-4.jpg',
  'Williamsburg_afternoon(cloudy)/1-5.jpg',
  'Williamsburg_afternoon(cloudy)/1-6.jpg',
  'Williamsburg_afternoon(cloudy)/1-7.jpg',
  'Williamsburg_afternoon(cloudy)/1-8.jpg',
];


/* ============================================================
   PARSE LOCATION & TIME FROM FOLDER NAME
   Folder format: LOCATION_time
   Separator: first _.
   Special case: WB_afternoon(cloudy) →
     location "WB", time "afternoon(cloudy)".
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
   morning → afternoon → afternoon(cloudy) → sunset
============================================================ */
const TIME_ORDER = {
  'morning':             0,
  'afternoon':           1,
  'afternoon(cloudy)':   2,
  'sunset':              3,
};

const TIME_LABELS = {
  'morning':             'Morning',
  'afternoon':           'Afternoon',
  'afternoon(cloudy)':   'Afternoon (Cloudy)',
  'sunset':              'Sunset',
};

function formatTime(time) { return TIME_LABELS[time] || time; }

const LOCATION_LABELS = {
  'Brooklyn':           'Brooklyn',
  'Central park':       'Central Park',
  'Chealsea':           'Chelsea',
  'Columbia University': 'Columbia University',
  'Coney Island':       'Coney Island',
  'Williamsburg':       'Williamsburg',
};

function formatLocation(loc) { return LOCATION_LABELS[loc] || loc; }


/* ============================================================
   FILTER STATE
============================================================ */
let activeTime     = null;  // selected time key, or null
let activeLocation = null;  // selected location key, or null
let timePanelOpen  = false;
let placePanelOpen = false;
let displayPhotos  = [];


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
