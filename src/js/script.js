/**
 * Village Admin Dashboard - Main Application Script
 * Padukuhan Ngentak Poncosari Administration System
 * 
 * @description Dashboard untuk mengelola data administrasi, kependudukan, dan peta wilayah
 * @author Armando Firlian
 * @version 1.0.0
 */

// ==================== Data Management ====================

/**
 * Central data store untuk dashboard
 * Berisi informasi penduduk, kategori umur, pekerjaan, dan data RT
 */
const dashboardData = {
  totalPenduduk: 824,
  pria: 412,
  wanita: 412,
  activeRt: 'RT 01',
  ageCategories: [
    { label: '0-5', value: 58 },
    { label: '6-12', value: 99 },
    { label: '13-17', value: 70 },
    { label: '18-25', value: 106 },
    { label: '26-45', value: 230 },
    { label: '46-60', value: 162 },
    { label: '61+', value: 99 }
  ],
  occupations: [
    { label: 'Petani', value: 190 },
    { label: 'Buruh', value: 105 },
    { label: 'Pedagang', value: 64 },
    { label: 'PNS', value: 42 },
    { label: 'Honorer', value: 35 },
    { label: 'Pelajar/Mahasiswa', value: 126 },
    { label: 'IRT', value: 130 },
    { label: 'Lainnya', value: 132 }
  ],
  rt: [
    {
      rt: 'RT 01',
      total: 134,
      pria: 67,
      wanita: 67,
      leader: 'Ketua RT 01',
      mainJobs: 'Pertanian & UMKM',
      ageCategories: [
        { label: '0-5', value: 11 },
        { label: '6-12', value: 18 },
        { label: '13-17', value: 13 },
        { label: '18-25', value: 18 },
        { label: '26-45', value: 41 },
        { label: '46-60', value: 24 },
        { label: '61+', value: 9 }
      ],
      occupations: [
        { label: 'Petani', value: 32 },
        { label: 'Buruh', value: 18 },
        { label: 'Pedagang', value: 14 },
        { label: 'PNS', value: 6 },
        { label: 'IRT', value: 24 },
        { label: 'Pelajar/Mahasiswa', value: 22 },
        { label: 'Lainnya', value: 18 }
      ]
    },
    {
      rt: 'RT 02',
      total: 148,
      pria: 72,
      wanita: 76,
      leader: 'Ketua RT 02',
      mainJobs: 'Buruh & perdagangan',
      ageCategories: [
        { label: '0-5', value: 13 },
        { label: '6-12', value: 19 },
        { label: '13-17', value: 14 },
        { label: '18-25', value: 21 },
        { label: '26-45', value: 44 },
        { label: '46-60', value: 25 },
        { label: '61+', value: 12 }
      ],
      occupations: [
        { label: 'Petani', value: 20 },
        { label: 'Buruh', value: 29 },
        { label: 'Pedagang', value: 18 },
        { label: 'PNS', value: 4 },
        { label: 'IRT', value: 26 },
        { label: 'Pelajar/Mahasiswa', value: 24 },
        { label: 'Lainnya', value: 27 }
      ]
    },
    {
      rt: 'RT 03',
      total: 129,
      pria: 62,
      wanita: 67,
      leader: 'Ketua RT 03',
      mainJobs: 'Petani & rumah tangga',
      ageCategories: [
        { label: '0-5', value: 10 },
        { label: '6-12', value: 17 },
        { label: '13-17', value: 12 },
        { label: '18-25', value: 16 },
        { label: '26-45', value: 38 },
        { label: '46-60', value: 24 },
        { label: '61+', value: 12 }
      ],
      occupations: [
        { label: 'Petani', value: 31 },
        { label: 'Buruh', value: 17 },
        { label: 'Pedagang', value: 11 },
        { label: 'PNS', value: 5 },
        { label: 'IRT', value: 23 },
        { label: 'Pelajar/Mahasiswa', value: 20 },
        { label: 'Lainnya', value: 22 }
      ]
    },
    {
      rt: 'RT 04',
      total: 137,
      pria: 70,
      wanita: 67,
      leader: 'Ketua RT 04',
      mainJobs: 'Petani & jasa',
      ageCategories: [
        { label: '0-5', value: 11 },
        { label: '6-12', value: 18 },
        { label: '13-17', value: 13 },
        { label: '18-25', value: 19 },
        { label: '26-45', value: 41 },
        { label: '46-60', value: 24 },
        { label: '61+', value: 11 }
      ],
      occupations: [
        { label: 'Petani', value: 28 },
        { label: 'Buruh', value: 19 },
        { label: 'Pedagang', value: 13 },
        { label: 'PNS', value: 7 },
        { label: 'IRT', value: 21 },
        { label: 'Pelajar/Mahasiswa', value: 23 },
        { label: 'Lainnya', value: 26 }
      ]
    },
    {
      rt: 'RT 05',
      total: 134,
      pria: 67,
      wanita: 67,
      leader: 'Ketua RT 05',
      mainJobs: 'Pendidikan & usaha lokal',
      ageCategories: [
        { label: '0-5', value: 12 },
        { label: '6-12', value: 18 },
        { label: '13-17', value: 14 },
        { label: '18-25', value: 18 },
        { label: '26-45', value: 39 },
        { label: '46-60', value: 23 },
        { label: '61+', value: 10 }
      ],
      occupations: [
        { label: 'Petani', value: 17 },
        { label: 'Buruh', value: 14 },
        { label: 'Pedagang', value: 12 },
        { label: 'PNS', value: 9 },
        { label: 'IRT', value: 25 },
        { label: 'Pelajar/Mahasiswa', value: 28 },
        { label: 'Lainnya', value: 29 }
      ]
    },
    {
      rt: 'RT 06',
      total: 142,
      pria: 71,
      wanita: 71,
      leader: 'Ketua RT 06',
      mainJobs: 'Pertanian & kewirausahaan',
      ageCategories: [
        { label: '0-5', value: 12 },
        { label: '6-12', value: 16 },
        { label: '13-17', value: 14 },
        { label: '18-25', value: 18 },
        { label: '26-45', value: 43 },
        { label: '46-60', value: 26 },
        { label: '61+', value: 13 }
      ],
      occupations: [
        { label: 'Petani', value: 30 },
        { label: 'Buruh', value: 16 },
        { label: 'Pedagang', value: 15 },
        { label: 'PNS', value: 6 },
        { label: 'IRT', value: 25 },
        { label: 'Pelajar/Mahasiswa', value: 22 },
        { label: 'Lainnya', value: 28 }
      ]
    }
  ]
};

// ==================== Rendering Functions ====================

/**
 * Render summary statistics di hero header
 */
function renderSummary() {
  const summary = document.getElementById('top-summary');
  const cards = [
    { label: 'Total Penduduk', value: dashboardData.totalPenduduk },
    { label: 'Total Pria', value: dashboardData.pria },
    { label: 'Total Wanita', value: dashboardData.wanita },
    { label: 'Jumlah RT', value: dashboardData.rt.length }
  ];

  summary.innerHTML = cards
    .map(
      (item) => `
        <article class="stat-card">
          <h3>${item.label}</h3>
          <strong>${item.value}</strong>
        </article>
      `
    )
    .join('');
}

/**
 * Render bar chart untuk data kuantitatif
 * @param {string} containerId - ID element untuk chart
 * @param {Array} data - Array data dengan struktur {label, value}
 * @param {Function} formatValue - Optional formatter untuk value display
 */
function renderBarChart(containerId, data, formatValue = (v) => v) {
  const container = document.getElementById(containerId);
  const max = Math.max(...data.map((item) => item.value));

  container.innerHTML = data
    .map(
      (item) => `
        <div class="bar-row">
          <div class="bar-label">${item.label}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${(item.value / max) * 100}%"></div>
          </div>
          <div class="bar-value">${formatValue(item.value)}</div>
        </div>
      `
    )
    .join('');
}

/**
 * Render RT cards grid dengan interaktivitas
 */
function renderRtCards() {
  const rtCards = document.getElementById('rt-cards');
  rtCards.innerHTML = dashboardData.rt
    .map(
      (item) => `
        <article class="rt-card ${item.rt === dashboardData.activeRt ? 'is-active' : ''}" data-rt="${item.rt}">
          <p class="eyebrow">Wilayah Administrasi</p>
          <h3>${item.rt}</h3>
          <p><strong>${item.total}</strong> jiwa</p>
          <p>Pria: ${item.pria} • Wanita: ${item.wanita}</p>
          <div class="rt-meta">
            <span class="pill">${item.leader}</span>
            <span class="pill">${item.mainJobs}</span>
          </div>
        </article>
      `
    )
    .join('');

  rtCards.querySelectorAll('.rt-card').forEach((card) => {
    card.addEventListener('click', () => {
      dashboardData.activeRt = card.dataset.rt;
      renderRtCards();
      renderRtFocusSummary();
      updateMapFocus();
    });
  });
}

/**
 * Render detail summary untuk RT yang dipilih
 */
function renderRtFocusSummary() {
  const selected = dashboardData.rt.find((item) => item.rt === dashboardData.activeRt) || dashboardData.rt[0];
  const summary = document.getElementById('rt-focus-summary');

  summary.innerHTML = `
    <h3>${selected.rt}</h3>
    <p>${selected.leader} • ${selected.mainJobs}</p>
    <div class="focus-grid">
      <div class="focus-metric">
        <span>Total Jiwa</span>
        <strong>${selected.total}</strong>
      </div>
      <div class="focus-metric">
        <span>Pria</span>
        <strong>${selected.pria}</strong>
      </div>
      <div class="focus-metric">
        <span>Wanita</span>
        <strong>${selected.wanita}</strong>
      </div>
    </div>
    <div class="focus-detail-grid">
      <div class="focus-list">
        <h4>Pekerjaan</h4>
        <ul>
          ${selected.occupations
      .map((job) => `<li><span>${job.label}</span><strong>${job.value}</strong></li>`)
      .join('')}
        </ul>
      </div>
      <div class="focus-list">
        <h4>Kategori Umur</h4>
        <ul>
          ${selected.ageCategories
      .map((age) => `<li><span>${age.label}</span><strong>${age.value}</strong></li>`)
      .join('')}
        </ul>
      </div>
    </div>
  `;
}

/**
 * Update visual focus pada elemen peta berdasarkan RT aktif
 */
function updateMapFocus() {
  document.querySelectorAll('.rt-shape').forEach((shape) => {
    const isActive = shape.dataset.rt === dashboardData.activeRt;
    shape.classList.toggle('is-active', isActive);
    shape.classList.toggle('is-dim', !isActive);
  });
}

/**
 * Bind click event listeners pada elemen peta
 */
function bindMapInteractions() {
  document.querySelectorAll('.rt-shape').forEach((shape) => {
    shape.addEventListener('click', () => {
      dashboardData.activeRt = shape.dataset.rt;
      renderRtCards();
      renderRtFocusSummary();
      updateMapFocus();
    });
  });
}

// ==================== Initialization ====================

/**
 * Initialize dashboard - render semua komponen
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🏘️ Village Admin Dashboard - Initializing...');

  renderSummary();
  renderBarChart('gender-chart', [
    { label: 'Pria', value: dashboardData.pria },
    { label: 'Wanita', value: dashboardData.wanita }
  ]);
  renderBarChart('age-chart', dashboardData.ageCategories);
  renderBarChart('occupation-chart', dashboardData.occupations);
  renderRtCards();
  renderRtFocusSummary();
  updateMapFocus();
  bindMapInteractions();

  console.log('✅ Dashboard initialized successfully');
});
