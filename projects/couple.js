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
const BASE_PATH = '../images/02_couple';

const PHOTOS = [
  /* BK — Afternoon / Sunset */
  'BK_Afternoon-sunset/NS400147-14.jpg',
  'BK_Afternoon-sunset/NS400285-33.jpg',
  'BK_Afternoon-sunset/NS400463-51.jpg',
  'BK_Afternoon-sunset/NS400592.jpg',
  'BK_Afternoon-sunset/NS400639.jpg',
  'BK_Afternoon-sunset/NS400732.jpg',
  'BK_Afternoon-sunset/NS400886-106.jpg',
  'BK_Afternoon-sunset/NS400983-125.jpg',
  'BK_Afternoon-sunset/NS401033-135.jpg',
  'BK_Afternoon-sunset/NS401495-183.jpg',
  'BK_Afternoon-sunset/NS402002-233.jpg',
  'BK_Afternoon-sunset/NS402225.jpg',
  'BK_Afternoon-sunset/NS402522.jpg',
  'BK_Afternoon-sunset/NS501284.jpg',
  'BK_Afternoon-sunset/NS501337.jpg',
  'BK_Afternoon-sunset/NS501432.jpg',
  'BK_Afternoon-sunset/NS501528.jpg',
  'BK_Afternoon-sunset/NS501640.jpg',
  'BK_Afternoon-sunset/NS501793.jpg',
  'BK_Afternoon-sunset/NS600154-255.jpg',
  'BK_Afternoon-sunset/NS600227-268.jpg',
  'BK_Afternoon-sunset/NS600310-276.jpg',
  'BK_Afternoon-sunset/NS600456-295.jpg',
  'BK_Afternoon-sunset/NS600509-302.jpg',
  'BK_Afternoon-sunset/NS600742.jpg',
  'BK_Afternoon-sunset/NS601008.jpg',
  'BK_Afternoon-sunset/NS601059-379.jpg',
  'BK_Afternoon-sunset/NS601079.jpg',
  'BK_Afternoon-sunset/NS601116-385.jpg',
  'BK_Afternoon-sunset/NS601443.jpg',
  'BK_Afternoon-sunset/NS601589.jpg',
  'BK_Afternoon-sunset/NS601665.jpg',
  'BK_Afternoon-sunset/NS700551.jpg',
  'BK_Afternoon-sunset/NS700801.jpg',

  /* BK — Morning */
  'BK_morning/NS400056-1.jpg',
  'BK_morning/NS400147-2.jpg',
  'BK_morning/NS400314-3.jpg',
  'BK_morning/NS400391-4.jpg',
  'BK_morning/NS400611-5.jpg',
  'BK_morning/NS400674-6.jpg',
  'BK_morning/NS600005-7.jpg',
  'BK_morning/NS600036.jpg',
  'BK_morning/NS600039.jpg',
  'BK_morning/NS600077-8.jpg',
  'BK_morning/NS600126.jpg',
  'BK_morning/NS600139.jpg',
  'BK_morning/NS600151.jpg',
  'BK_morning/NS600191-9.jpg',
  'BK_morning/NS600217.jpg',
  'BK_morning/NS600263-10.jpg',
  'BK_morning/NS600285-11.jpg',
  'BK_morning/NS600294.jpg',
  'BK_morning/NS600295.jpg',
  'BK_morning/NS600298.jpg',
  'BK_morning/NS600305-편집.jpg',
  'BK_morning/NS600331-12.jpg',
  'BK_morning/NS600352.jpg',
  'BK_morning/NS600403.jpg',
  'BK_morning/NS600421.jpg',
  'BK_morning/NS600450.jpg',
  'BK_morning/NS600459.jpg',
  'BK_morning/NS600512-편집.jpg',
  'BK_morning/NS600532.jpg',
  'BK_morning/NS600569-편집.jpg',
  'BK_morning/NS600587.jpg',
  'BK_morning/NS600602.jpg',
  'BK_morning/NS600712.jpg',
  'BK_morning/NS600737.jpg',
  'BK_morning/NS600794-편집.jpg',
  'BK_morning/NS600823.jpg',
  'BK_morning/NS600967-편집.jpg',
  'BK_morning/NS601031.jpg',
  'BK_morning/NS601044.jpg',
  'BK_morning/NS601145-편집.jpg',
  'BK_morning/NS601176.jpg',
  'BK_morning/NS601212.jpg',
  'BK_morning/NS601235.jpg',
  'BK_morning/NS601267.jpg',
  'BK_morning/NS601344.jpg',
  'BK_morning/NS700012.jpg',
  'BK_morning/NS700040.jpg',
  'BK_morning/NS700122.jpg',
  'BK_morning/NS700235.jpg',
  'BK_morning/NS700270-1.jpg',
  'BK_morning/NS700270.jpg',
  'BK_morning/NS700274.jpg',
  'BK_morning/NS700306.jpg',
  'BK_morning/NS700333.jpg',
  'BK_morning/NS700375.jpg',
  'BK_morning/NS700410.jpg',
  'BK_morning/NS700447.jpg',
  'BK_morning/NS700911.jpg',
  'BK_morning/NS701074.jpg',

  /* CP — Afternoon */
  'CP_afternoon/DSCF2757.jpg',
  'CP_afternoon/NS400225.jpg',
  'CP_afternoon/NS400307.jpg',
  'CP_afternoon/NS400368.jpg',
  'CP_afternoon/NS400388.jpg',
  'CP_afternoon/NS400421.jpg',
  'CP_afternoon/NS400483.jpg',
  'CP_afternoon/NS400560.jpg',
  'CP_afternoon/NS403745.jpg',
  'CP_afternoon/NS404928.jpg',
  'CP_afternoon/NS406138.jpg',
  'CP_afternoon/NS500030.jpg',
  'CP_afternoon/NS500050.jpg',
  'CP_afternoon/NS500194.jpg',
  'CP_afternoon/NS500263.jpg',
  'CP_afternoon/NS500590.jpg',
  'CP_afternoon/NS500705.jpg',
  'CP_afternoon/NS500772.jpg',
  'CP_afternoon/NS500794.jpg',
  'CP_afternoon/NS500808.jpg',
  'CP_afternoon/NS500871.jpg',
  'CP_afternoon/NS500946.jpg',
  'CP_afternoon/NS500960.jpg',
  'CP_afternoon/NS501008.jpg',
  'CP_afternoon/NS501014.jpg',
  'CP_afternoon/NS601793.jpg',
  'CP_afternoon/NS601902.jpg',

  /* CP — Morning */
  'CP_morning/NS600029.jpg',
  'CP_morning/NS600049.jpg',
  'CP_morning/NS600087.jpg',
  'CP_morning/NS600150.jpg',
  'CP_morning/NS600166.jpg',
  'CP_morning/NS600234.jpg',
  'CP_morning/NS600313.jpg',
  'CP_morning/NS600400.jpg',
  'CP_morning/NS600423.jpg',
  'CP_morning/NS600446.jpg',
  'CP_morning/NS600506.jpg',
  'CP_morning/NS600520.jpg',
  'CP_morning/NS600627.jpg',
  'CP_morning/NS600645.jpg',
  'CP_morning/NS700161.jpg',
  'CP_morning/NS700231.jpg',
  'CP_morning/NS700283.jpg',

  /* CS — Afternoon */
  'CS-afternoon/NS601465.jpg',
  'CS-afternoon/NS601504.jpg',
  'CS-afternoon/NS601521.jpg',
  'CS-afternoon/NS601525.jpg',
  'CS-afternoon/NS601536.jpg',
  'CS-afternoon/NS601567.jpg',
  'CS-afternoon/NS601611.jpg',
  'CS-afternoon/NS601661.jpg',
  'CS-afternoon/NS601708.jpg',
  'CS-afternoon/NS601730.jpg',
  'CS-afternoon/NS601826.jpg',
  'CS-afternoon/NS700409.jpg',
  'CS-afternoon/NS700509.jpg',
  'CS-afternoon/NS700575.jpg',

  /* City — Afternoon */
  'City-afternoon/NS401023.jpg',
  'City-afternoon/NS401097.jpg',
  'City-afternoon/NS401280.jpg',
  'City-afternoon/NS401324-1.jpg',
  'City-afternoon/NS401348.jpg',
  'City-afternoon/NS401359.jpg',
  'City-afternoon/NS501884.jpg',
  'City-afternoon/NS502023.jpg',

  /* City — Night */
  'City-night/NS400078-4.jpg',
  'City-night/NS400144-5.jpg',
  'City-night/NS400168-6.jpg',
  'City-night/NS400281-7.jpg',
  'City-night/NS400340-8.jpg',
  'City-night/NS400342-9.jpg',
  'City-night/NS400451-12.jpg',
  'City-night/NS400481-13.jpg',
  'City-night/NS400559-14.jpg',
  'City-night/NS400699-20.jpg',
  'City-night/NS400757-21.jpg',
  'City-night/NS600051-1.jpg',
  'City-night/NS600108-2.jpg',
  'City-night/NS600349-3.jpg',
  'City-night/NS600370-10.jpg',
  'City-night/NS600415-11.jpg',
  'City-night/NS600542-15.jpg',
  'City-night/NS600548-16.jpg',
  'City-night/NS600580-17.jpg',
  'City-night/NS600732-18.jpg',
  'City-night/NS600747-19.jpg',

  /* GV — Afternoon / Sunset */
  'GV_afternoon-sunset/NS400195.jpg',
  'GV_afternoon-sunset/NS400386.jpg',
  'GV_afternoon-sunset/NS400452-향상됨-노이즈 감소.jpg',
  'GV_afternoon-sunset/NS400477.jpg',
  'GV_afternoon-sunset/NS500035.jpg',
  'GV_afternoon-sunset/NS500123.jpg',
  'GV_afternoon-sunset/NS500206.jpg',
  'GV_afternoon-sunset/NS500235.jpg',
  'GV_afternoon-sunset/NS500373.jpg',
  'GV_afternoon-sunset/NS500493.jpg',
  'GV_afternoon-sunset/NS500506.jpg',
  'GV_afternoon-sunset/NS500578.jpg',
  'GV_afternoon-sunset/NS500634.jpg',
  'GV_afternoon-sunset/NS500671.jpg',
  'GV_afternoon-sunset/NS500703.jpg',
  'GV_afternoon-sunset/NS500975.jpg',
  'GV_afternoon-sunset/NS501054-향상됨-노이즈 감소.jpg',

  /* GV — Morning */
  'GV_morning/NS400056.jpg',
  'GV_morning/NS400195-2.jpg',
  'GV_morning/NS400299.jpg',
  'GV_morning/NS400391.jpg',
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
    return `${loc}  —  ${formatTime(time)}`;
  }
  if (filterTime)     return formatTime(key);
  return key; // location label as-is
}


/* ============================================================
   GRID RENDERING
============================================================ */
const grid = document.getElementById('photoGrid');

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
    PHOTO_DATA.forEach(photo => {
      const idx = displayPhotos.length;
      displayPhotos.push(photo);
      groupGrid.appendChild(createCell(photo, idx));
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

    groups[key].forEach(photo => {
      const idx = displayPhotos.length;
      displayPhotos.push(photo);
      groupGrid.appendChild(createCell(photo, idx));
    });

    groupEl.appendChild(groupGrid);
    grid.appendChild(groupEl);
  });
}


/* ============================================================
   FILTER BUTTONS
============================================================ */
document.getElementById('btnLocation').addEventListener('click', function () {
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
