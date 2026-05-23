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
        const rs = document.createElement('div');
        rs.className = 'grid-row-spacer';
        groupGrid.appendChild(rs);
      }
    });
    grid.appendChild(groupGrid);
    return;
  }

  const groups     = buildGroups();
  const sortedKeys = Object.keys(groups).sort(compareKeys);

  sortedKeys.forEach(key => {
    const groupEl = document.createElement('div');
    groupEl.className = 'photo-group';
    const labelEl = document.createElement('div');
    labelEl.className   = 'group-label';
    labelEl.textContent = formatKey(key);
    groupEl.appendChild(labelEl);
    const groupGrid = document.createElement('div');
    groupGrid.className = 'group-grid';
    let rowCount = 0;
    groups[key].forEach(photo => {
      const idx = displayPhotos.length;
      displayPhotos.push(photo);
      groupGrid.appendChild(createCell(photo, idx));
      groupGrid.appendChild(createEmptyCell());
      rowCount++;
      if (rowCount % 8 === 0) {
        const rs = document.createElement('div');
        rs.className = 'grid-row-spacer';
        groupGrid.appendChild(rs);
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
