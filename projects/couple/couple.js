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
  'Central park_morning/1-1(1).jpg',
  'Central park_morning/1-1.jpg',
  'Central park_morning/1-12(1).jpg',
  'Central park_morning/1-12.jpg',
  'Central park_morning/1-13(1).jpg',
  'Central park_morning/1-13.jpg',
  'Central park_morning/1-16(1).jpg',
  'Central park_morning/1-16.jpg',
  'Central park_morning/1-3(1).jpg',
  'Central park_morning/1-3.jpg',
  'Central park_morning/1-4(1).jpg',
  'Central park_morning/1-4.jpg',
  'Central park_morning/1-5(1).jpg',
  'Central park_morning/1-5.jpg',
  'Central park_morning/1-6(1).jpg',
  'Central park_morning/1-6.jpg',
  'Central park_morning/1-9(1).jpg',
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
let filterLocation = false;
let filterTime     = false;
let displayPhotos  = []; // photos in current render order — used by lightbox


/* ============================================================
   GROUPING & SORTING
============================================================ */
function buildGroups() {
  const groups = {};
  PHOTO_DATA.forEach(photo => {
    const key = filterLocation && filterTime ? `${photo.location}||${photo.time}`
              : filterLocation               ? photo.location
              :                                photo.time; // filterTime only
    if (!groups[key]) groups[key] = [];
    groups[key].push(photo);
  });
  return groups;
}

function compareKeys(a, b) {
  if (filterLocation && filterTime) {
    const [locA, timeA] = a.split('||');
    const [locB, timeB] = b.split('||');
    const locCmp = locA.localeCompare(locB);
    if (locCmp !== 0) return locCmp;
    return (TIME_ORDER[timeA] ?? 99) - (TIME_ORDER[timeB] ?? 99);
  }
  if (filterTime) {
    return (TIME_ORDER[a] ?? 99) - (TIME_ORDER[b] ?? 99);
  }
  return a.localeCompare(b); // location only: alphabetical
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
    // No active filter: single flat grid in PHOTOS array order
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

  const groups     = buildGroups();
  const sortedKeys = Object.keys(groups).sort(compareKeys);

  sortedKeys.forEach(key => {
    const groupEl  = document.createElement('div');
    groupEl.className = 'photo-group';

    const labelEl  = document.createElement('div');
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
