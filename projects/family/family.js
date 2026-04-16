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
  /* BK — Morning */
  'BK_morning/NS600228.jpg',
  'BK_morning/NS600489.jpg',
  'BK_morning/NS600803.jpg',
  'BK_morning/NS700009.jpg',
  'BK_morning/NS700125.jpg',
  'BK_morning/NS700197.jpg',
  'BK_morning/NS700275.jpg',
  'BK_morning/NS700336.jpg',
  'BK_morning/NS700451.jpg',

  /* CP — Afternoon */
  'CP_afternoon/NS400003.jpg',
  'CP_afternoon/NS400086-2.jpg',
  'CP_afternoon/NS400265.jpg',
  'CP_afternoon/NS400650-9.jpg',
  'CP_afternoon/NS400757-10.jpg',
  'CP_afternoon/NS400779-11.jpg',
  'CP_afternoon/NS400865-12.jpg',
  'CP_afternoon/NS401172-21.jpg',
  'CP_afternoon/NS501190.jpg',
  'CP_afternoon/NS501221.jpg',
  'CP_afternoon/NS501239.jpg',
  'CP_afternoon/NS501291.jpg',
  'CP_afternoon/NS501405.jpg',
  'CP_afternoon/NS501422.jpg',
  'CP_afternoon/NS501621.jpg',
  'CP_afternoon/NS501710.jpg',
  'CP_afternoon/NS600008-1.jpg',
  'CP_afternoon/NS600065.jpg',
  'CP_afternoon/NS600083-3.jpg',
  'CP_afternoon/NS600089.jpg',
  'CP_afternoon/NS600308.jpg',
  'CP_afternoon/NS600565.jpg',
  'CP_afternoon/NS600612.jpg',
  'CP_afternoon/NS600656.jpg',
  'CP_afternoon/NS600768.jpg',
  'CP_afternoon/NS600795.jpg',
  'CP_afternoon/NS600853.jpg',
  'CP_afternoon/NS600891.jpg',
  'CP_afternoon/NS601001.jpg',
  'CP_afternoon/NS601316.jpg',
  'CP_afternoon/NS601358.jpg',
  'CP_afternoon/NS607834.jpg',
  'CP_afternoon/NS607874.jpg',
  'CP_afternoon/NS607894.jpg',

  /* CP — Morning */
  'CP_morning/NS400008.jpg',
  'CP_morning/NS400418-1.jpg',
  'CP_morning/NS400481-3.jpg',
  'CP_morning/NS400499-4.jpg',
  'CP_morning/NS400672-9.jpg',
  'CP_morning/NS400721-10.jpg',
  'CP_morning/NS400843-12.jpg',
  'CP_morning/NS400913-13.jpg',
  'CP_morning/NS400951-14.jpg',
  'CP_morning/NS400963-15.jpg',
  'CP_morning/NS401003-17.jpg',
  'CP_morning/NS401021-18.jpg',
  'CP_morning/NS401038-19.jpg',
  'CP_morning/NS600008.jpg',
  'CP_morning/NS600056.jpg',
  'CP_morning/NS600085.jpg',
  'CP_morning/NS600433.jpg',
  'CP_morning/NS600471.jpg',
  'CP_morning/NS600659.jpg',
  'CP_morning/NS600689.jpg',
  'CP_morning/NS600719-21.jpg',
  'CP_morning/NS600876.jpg',
  'CP_morning/NS600889.jpg',
  'CP_morning/NS600940.jpg',
  'CP_morning/NS600984.jpg',
  'CP_morning/NS601007.jpg',
  'CP_morning/NS601017.jpg',
  'CP_morning/NS601060.jpg',
  'CP_morning/NS601073.jpg',

  /* Home — Morning */
  'Home_morning/NS403012-fix pant, crop-1.jpg',
  'Home_morning/NS403046-2.jpg',
  'Home_morning/NS403369-3.jpg',
  'Home_morning/NS403410-4.jpg',
  'Home_morning/NS403420-fix shirt-5.jpg',
  'Home_morning/NS403446-6.jpg',
  'Home_morning/NS403530-7.jpg',
  'Home_morning/NS404091-8.jpg',
  'Home_morning/NS404146-9.jpg',
  'Home_morning/NS404310-10.jpg',
  'Home_morning/NS404412-11.jpg',
  'Home_morning/NS404519-12.jpg',
  'Home_morning/NS404545-13.jpg',
  'Home_morning/NS404667-14.jpg',
  'Home_morning/NS404717-15.jpg',
  'Home_morning/NS404730-tone down-16.jpg',
  'Home_morning/NS404742-17.jpg',
  'Home_morning/NS404939-18.jpg',
  'Home_morning/NS405305-19.jpg',
  'Home_morning/NS405478-20.jpg',
  'Home_morning/NS405608-jena crop-21.jpg',
  'Home_morning/NS405706-stroller remove-22.jpg',
  'Home_morning/NS405795-people remove-23.jpg',
  'Home_morning/NS405923-24.jpg',
  'Home_morning/NS406078-25.jpg',
  'Home_morning/NS406237-only sam crop-26.jpg',
  'Home_morning/NS406316-27.jpg',
  'Home_morning/NS406353-28.jpg',
  'Home_morning/NS406378-29.jpg',
  'Home_morning/NS406464-shadow,_ A_ remove-30.jpg',
  'Home_morning/NS601123-편집.jpg',
  'Home_morning/NS601150-편집.jpg',
  'Home_morning/NS601214-편집.jpg',
  'Home_morning/NS701690.jpg',
  'Home_morning/NS701869.jpg',
  'Home_morning/NS701892.jpg',
  'Home_morning/NS701930.jpg',
  'Home_morning/NS701951.jpg',
  'Home_morning/NS702227.jpg',
  'Home_morning/NS702275.jpg',
  'Home_morning/NS702286-편집.jpg',
  'Home_morning/NS702385-편집.jpg',

  /* State Park — Afternoon */
  'State Park_afternoon/NS600026.jpg',
  'State Park_afternoon/NS600056.jpg',
  'State Park_afternoon/NS600115.jpg',
  'State Park_afternoon/NS600221.jpg',
  'State Park_afternoon/NS600256.jpg',
  'State Park_afternoon/NS600360.jpg',
  'State Park_afternoon/NS600845.jpg',
  'State Park_afternoon/NS600901.jpg',
  'State Park_afternoon/NS700049.jpg',
  'State Park_afternoon/NS700121.jpg',
  'State Park_afternoon/NS700154.jpg',
  'State Park_afternoon/NS700320.jpg',
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
  'BK':         'Brooklyn',
  'CP':         'Central Park',
  'Home':       'Home',
  'State Park': 'State Park',
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
    PHOTO_DATA.forEach(photo => {
      const idx = displayPhotos.length;
      displayPhotos.push(photo);
      groupGrid.appendChild(createCell(photo, idx));
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
    buildGroups()[key].forEach(photo => {
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
