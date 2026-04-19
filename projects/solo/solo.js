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
  /* BK — Afternoon */
  'BK_afternoon/DSCF6588.JPG',
  'BK_afternoon/DSCF6595.JPG',
  'BK_afternoon/DSCF6604.JPG',
  'BK_afternoon/DSCF6616.JPG',
  'BK_afternoon/DSCF6622.JPG',
  'BK_afternoon/DSCF6633.JPG',
  'BK_afternoon/DSCF6638.JPG',
  'BK_afternoon/DSCF6642.JPG',
  'BK_afternoon/DSCF6653.JPG',
  'BK_afternoon/DSCF6659.JPG',
  'BK_afternoon/DSCF6668.JPG',
  'BK_afternoon/DSCF6679.JPG',
  'BK_afternoon/DSCF6681.JPG',
  'BK_afternoon/DSCF6696.JPG',
  'BK_afternoon/DSCF6703.JPG',
  'BK_afternoon/DSCF6710.JPG',
  'BK_afternoon/DSCF6754.JPG',
  'BK_afternoon/DSCF6769.JPG',
  'BK_afternoon/DSCF6792.JPG',
  'BK_afternoon/DSCF6805.JPG',
  'BK_afternoon/DSCF6812.JPG',
  'BK_afternoon/DSCF6828.JPG',
  'BK_afternoon/DSCF6830.JPG',
  'BK_afternoon/DSCF6847.JPG',
  'BK_afternoon/DSCF6857 복사.jpg',
  'BK_afternoon/DSCF6857.JPG',

  /* BK — Morning */
  'BK_morning/NS400089.jpg',
  'BK_morning/NS400139.jpg',
  'BK_morning/NS400189.jpg',
  'BK_morning/NS400241.jpg',
  'BK_morning/NS400276.jpg',
  'BK_morning/NS400298.jpg',
  'BK_morning/NS400340.jpg',
  'BK_morning/NS400372.jpg',
  'BK_morning/NS400405.jpg',
  'BK_morning/NS400471.jpg',
  'BK_morning/NS400512.jpg',
  'BK_morning/NS400553.jpg',
  'BK_morning/NS400571.jpg',
  'BK_morning/NS400655.jpg',
  'BK_morning/NS500001.jpg',
  'BK_morning/NS500106.jpg',
  'BK_morning/NS500130.jpg',
  'BK_morning/NS500154.jpg',
  'BK_morning/NS500250.jpg',

  /* CP — Morning */
  'CP_morning/NS400047-1-1.jpg',
  'CP_morning/NS400049-2-2.jpg',
  'CP_morning/NS400204-12-4.jpg',
  'CP_morning/NS400230-15-5.jpg',
  'CP_morning/NS400261-19-6.jpg',
  'CP_morning/NS400467-29-7.jpg',
  'CP_morning/NS400546-33-8.jpg',
  'CP_morning/NS400563-35-9.jpg',
  'CP_morning/NS400642-40-10.jpg',
  'CP_morning/NS408903.jpg',
  'CP_morning/NS408919.jpg',
  'CP_morning/NS408928.jpg',
  'CP_morning/NS408949.jpg',
  'CP_morning/NS408962.jpg',
  'CP_morning/NS409049.jpg',
  'CP_morning/NS409109.jpg',
  'CP_morning/NS409163.jpg',
  'CP_morning/NS500039.jpg',
  'CP_morning/NS500095.jpg',
  'CP_morning/NS500109.jpg',
  'CP_morning/NS509772.jpg',
  'CP_morning/NS509844.jpg',
  'CP_morning/NS509863.jpg',
  'CP_morning/NS509872.jpg',
  'CP_morning/NS509987.jpg',
  'CP_morning/NS600289-8-3.jpg',
  'CP_morning/NS600481-49-11.jpg',
  'CP_morning/NS600495-51-12.jpg',
  'CP_morning/NS600501-52-13.jpg',
  'CP_morning/NS600514-53-14.jpg',

  /* CP — Sunset */
  'CP_sunset/NS400010-1.jpg',
  'CP_sunset/NS400028-2.jpg',
  'CP_sunset/NS400045-1.jpg',
  'CP_sunset/NS400066-2.jpg',
  'CP_sunset/NS400108-3.jpg',
  'CP_sunset/NS400161-7.jpg',
  'CP_sunset/NS400186-8.jpg',
  'CP_sunset/NS400322-4.jpg',
  'CP_sunset/NS400439-14.jpg',
  'CP_sunset/NS400439-5.jpg',
  'CP_sunset/NS400457-15.jpg',
  'CP_sunset/NS400488-16.jpg',
  'CP_sunset/NS600043-20.jpg',
  'CP_sunset/NS600054-21.jpg',
  'CP_sunset/NS600149-25.jpg',
  'CP_sunset/NS600204-26.jpg',
  'CP_sunset/NS600242-27.jpg',
  'CP_sunset/NS600279-28.jpg',

  /* CS — Sunset */
  'CS_sunset/NS404381_.jpg',
  'CS_sunset/NS404410.jpg',
  'CS_sunset/NS404411_.jpg',
  'CS_sunset/NS404418_.jpg',
  'CS_sunset/NS404438_.jpg',
  'CS_sunset/NS404452_.jpg',
  'CS_sunset/NS404550_.jpg',
  'CS_sunset/NS404635_.jpg',
  'CS_sunset/NS404654_.jpg',
  'CS_sunset/NS404674_.jpg',
  'CS_sunset/NS404689_.jpg',
  'CS_sunset/NS404741_.jpg',
  'CS_sunset/NS404744_.jpg',
  'CS_sunset/NS404770_.jpg',
  'CS_sunset/NS404833.jpg',
  'CS_sunset/NS404886_.jpg',
  'CS_sunset/NS404894_.jpg',
  'CS_sunset/NS404953_.jpg',
  'CS_sunset/NS404981_.jpg',
  'CS_sunset/NS405021_.jpg',
  'CS_sunset/NS405033_.jpg',
  'CS_sunset/NS405063-2_.jpg',
  'CS_sunset/NS405090-2_.jpg',
  'CS_sunset/NS405101-2_.jpg',
  'CS_sunset/NS405116-2_.jpg',
  'CS_sunset/NS405133-2_.jpg',
  'CS_sunset/NS405145-2_.jpg',
  'CS_sunset/NS405162-2_.jpg',
  'CS_sunset/NS500369-2_.jpg',
  'CS_sunset/NS500514_.jpg',
  'CS_sunset/NS500534_.jpg',
  'CS_sunset/NS500561_.jpg',
  'CS_sunset/NS500584_.jpg',
  'CS_sunset/NS500647_.jpg',
  'CS_sunset/NS500664_.jpg',
  'CS_sunset/NS500690_.jpg',
  'CS_sunset/NS500753-.jpg',
  'CS_sunset/NS500775_.jpg',
  'CS_sunset/NS500912_.jpg',
  'CS_sunset/NS500955_.jpg',
  'CS_sunset/NS500962_.jpg',
  'CS_sunset/NS500978_.jpg',
  'CS_sunset/NS500995_.jpg',
  'CS_sunset/NS501058_.jpg',
  'CS_sunset/NS501065_.jpg',
  'CS_sunset/NS501186_.jpg',
  'CS_sunset/NS501203_.jpg',
  'CS_sunset/NS501225_.jpg',
  'CS_sunset/NS501250_.jpg',
  'CS_sunset/NS501268_.jpg',
  'CS_sunset/NS501276_.jpg',
  'CS_sunset/NS501304-2_.jpg',

  /* CU — Afternoon */
  'CU_afternoon/NS409274.jpg',
  'CU_afternoon/NS409291.jpg',
  'CU_afternoon/NS409302.jpg',
  'CU_afternoon/NS409343.jpg',
  'CU_afternoon/NS409351.jpg',
  'CU_afternoon/NS409360.jpg',
  'CU_afternoon/NS500163.jpg',
  'CU_afternoon/NS500196.jpg',
  'CU_afternoon/NS500211.jpg',
  'CU_afternoon/NS500229.jpg',
  'CU_afternoon/NS500260.jpg',
  'CU_afternoon/NS500368.jpg',

  /* Coney — Afternoon */
  'Coney_afternoon/DSCF6908.jpg',
  'Coney_afternoon/DSCF7102.jpg',
  'Coney_afternoon/DSCF7193.jpg',
  'Coney_afternoon/DSCF7270.jpg',
  'Coney_afternoon/NS401230 복사.jpg',
  'Coney_afternoon/NS401265.jpg',
  'Coney_afternoon/NS401315 복사.jpg',
  'Coney_afternoon/NS401324 복사.jpg',
  'Coney_afternoon/NS401328.jpg',
  'Coney_afternoon/NS401360 복사.jpg',
  'Coney_afternoon/NS401360.jpg',
  'Coney_afternoon/NS401364.jpg',
  'Coney_afternoon/NS401435 복사.jpg',
  'Coney_afternoon/NS401490 복사.jpg',
  'Coney_afternoon/NS401514 복사.jpg',
  'Coney_afternoon/NS401514.jpg',
  'Coney_afternoon/NS401522 복사.jpg',
  'Coney_afternoon/NS401561 복사.jpg',
  'Coney_afternoon/NS401575 복사.jpg',
  'Coney_afternoon/NS401605 복사.jpg',
  'Coney_afternoon/NS401605.jpg',
  'Coney_afternoon/NS401624 복사.jpg',
  'Coney_afternoon/NS401668 복사.jpg',
  'Coney_afternoon/NS401682.jpg',
  'Coney_afternoon/NS401709 복사.jpg',
  'Coney_afternoon/NS401712.jpg',
  'Coney_afternoon/NS401716.jpg',
  'Coney_afternoon/NS401729.jpg',
  'Coney_afternoon/NS401761.jpg',
  'Coney_afternoon/NS500658.jpg',

  /* WB — Afternoon (Cloudy) */
  'WB_afternoon(cloudy)/NS400772-57-15.jpg',
  'WB_afternoon(cloudy)/NS400879-64-16.jpg',
  'WB_afternoon(cloudy)/NS400883-65-17.jpg',
  'WB_afternoon(cloudy)/NS400924-72-19.jpg',
  'WB_afternoon(cloudy)/NS401149-92-22.jpg',
  'WB_afternoon(cloudy)/NS401151-93-23.jpg',
  'WB_afternoon(cloudy)/NS401284-126-34.jpg',
  'WB_afternoon(cloudy)/NS600524-1.jpg',
  'WB_afternoon(cloudy)/NS600547-69-18.jpg',
  'WB_afternoon(cloudy)/NS600621-82-20.jpg',
  'WB_afternoon(cloudy)/NS600676-86-21.jpg',
  'WB_afternoon(cloudy)/NS600729-99-24.jpg',
  'WB_afternoon(cloudy)/NS600748-101-25.jpg',
  'WB_afternoon(cloudy)/NS600769-104-26.jpg',
  'WB_afternoon(cloudy)/NS600774-106-27.jpg',
  'WB_afternoon(cloudy)/NS600801-109-28.jpg',
  'WB_afternoon(cloudy)/NS600805-110-29.jpg',
  'WB_afternoon(cloudy)/NS600823-117-30.jpg',
  'WB_afternoon(cloudy)/NS600851-119-31.jpg',
  'WB_afternoon(cloudy)/NS600855-121-32.jpg',
  'WB_afternoon(cloudy)/NS600865-122-33.jpg',
  'WB_afternoon(cloudy)/NS600891-130-35.jpg',
  'WB_afternoon(cloudy)/NS600906-131-36.jpg',
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
  'BK':    'Brooklyn',
  'CP':    'Central Park',
  'CS':    'City Hall',
  'CU':    'Columbia University',
  'Coney': 'Coney Island',
  'WB':    'Williamsburg',
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
