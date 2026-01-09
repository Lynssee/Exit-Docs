/**
 * Content Module - SPA Version
 * Handles both Rekrutmen and Designer pages
 */

const contentLoader = document.getElementById('content-loader');

// SVG Icons
const icons = {
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>`,
    box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    mobile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    desktop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    offline: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
    store: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    food: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    health: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    tools: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    design: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
};

// Job Descriptions Data
const jobDescriptions = {
    cfo: {
        title: 'Finance & Business Strategy Lead',
        subtitle: 'Founding Team · Early-Stage / Part-Time',
        focus: 'Pricing, analisis bisnis, dan kesehatan keuangan awal',
        responsibilities: [
            'Membantu riset pasar dan kompetitor',
            'Menyusun pricing strategy untuk produk ExIT',
            'Membuat proyeksi sederhana (revenue & biaya)',
            'Monitoring pemasukan & pengeluaran dasar',
            'Membantu negosiasi harga dengan klien',
            'Menyusun laporan sederhana untuk internal tim',
            'Mendukung pengambilan keputusan bisnis CEO'
        ],
        requirements: [
            'Paham dasar keuangan & logika bisnis',
            'Bisa menggunakan spreadsheet (Excel / Google Sheets)',
            'Teliti dan rapi dalam data',
            'Mau belajar tentang bisnis & startup',
            'Tidak wajib background akuntansi'
        ],
        commitment: '± 5-10 jam/minggu',
        compensation: 'Revenue share 10-20% per deal/project + potensi equity'
    },
    cmo: {
        title: 'Marketing & Growth Lead',
        subtitle: 'Founding Team · Early-Stage / Part-Time',
        focus: 'Akuisisi klien UMKM, validasi market, dan growth awal',
        responsibilities: [
            'Mencari dan mengakuisisi klien UMKM (online & offline)',
            'Menjalankan aktivitas sales & follow-up leads',
            'Mengelola social media dan konten marketing dasar',
            'Membantu membangun awareness brand ExIT Platform',
            'Networking dengan komunitas UMKM / bisnis lokal',
            'Melakukan demo produk dan membantu proses closing',
            'Memberi feedback market ke tim produk (CEO/CTO)'
        ],
        requirements: [
            'Punya minat di marketing, sales, dan bisnis digital',
            'Komunikatif dan persuasif',
            'Aktif di media sosial (Instagram, TikTok, dll)',
            'Mau belajar dan terbuka dengan feedback',
            'Tidak harus berpengalaman (fresh graduate welcome)'
        ],
        commitment: '± 5-15 jam/minggu (fleksibel)',
        compensation: 'Komisi 10-20% dari deal closing + potensi equity'
    },
    designer: {
        title: 'UI/UX Designer',
        subtitle: 'Founding Team · Early-Stage / Part-Time',
        focus: 'Design system, komponen library, dan template apps',
        responsibilities: [
            'Design komponen UI untuk builder platform',
            'Membuat design system dan style guide',
            'Design template aplikasi (POS, inventory, dll)',
            'Iterasi design berdasarkan feedback',
            'Collaborate dengan developer untuk implementasi'
        ],
        requirements: [
            'Paham Figma (components, auto-layout, variants)',
            'Portfolio 3-5 project (bisa personal)',
            'Mengerti UX principles, bukan cuma visual',
            'Bisa terima feedback dan iterasi cepat'
        ],
        commitment: '± 5-15 jam/minggu',
        compensation: '15-25% dari nilai kustomisasi + potensi equity'
    }
};

function icon(name) {
    return `<span class="icon">${icons[name] || icons.box}</span>`;
}

// Modal functions
function showJobModal(roleKey) {
    const job = jobDescriptions[roleKey];
    if (!job) return;

    const modal = document.createElement('div');
    modal.className = 'job-modal';
    modal.innerHTML = `
        <div class="job-modal-backdrop" onclick="window.closeJobModal()"></div>
        <div class="job-modal-content">
            <button class="job-modal-close" onclick="window.closeJobModal()">×</button>
            <h2>${job.title}</h2>
            <p class="job-subtitle">${job.subtitle}</p>
            ${job.focus ? `<p class="job-focus">📌 ${job.focus}</p>` : ''}
            
            <h4>🎯 Tanggung Jawab</h4>
            <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
            
            <h4>🧠 Kualifikasi</h4>
            <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
            
            <div class="job-meta">
                <div><strong>⏱ Komitmen</strong> ${job.commitment}</div>
                <div><strong>💰 Kompensasi</strong> ${job.compensation}</div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeJobModal() {
    const modal = document.querySelector('.job-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Expose modal functions globally
window.showJobModal = showJobModal;
window.closeJobModal = closeJobModal;

// Current page state
let currentPage = 'rekrutmen';

export function loadContent(page = 'rekrutmen') {
    currentPage = page;
    if (page === 'designer') {
        contentLoader.innerHTML = generateDesignerContent();
    } else {
        contentLoader.innerHTML = generateRekrutmenContent();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function navigateTo(page) {
    loadContent(page);
    history.pushState({ page }, '', `#${page}`);
}

// Handle browser back/forward
window.addEventListener('popstate', (e) => {
    const page = e.state?.page || 'rekrutmen';
    loadContent(page);
});

// ============================================
// REKRUTMEN PAGE
// ============================================

function generateRekrutmenContent() {
    return `
        <div class="section-marker"><span>Daftar Isi</span></div>
        <h1>Navigasi Dokumen</h1>
        <div class="toc">${generateTocItems()}</div>
        <div class="page-break"></div>
        ${generateSection1()}
        ${generateSection2()}
        ${generateSection3()}
        ${generateSection4()}
        ${generateSection5()}
        ${generateSection6()}
        ${generateSection7()}
        ${generateSection8()}
        ${generateSection9()}
        ${generateSection10()}
    `;
}

function generateTocItems() {
    const items = [
        'Apa yang Kami Kerjakan', 'Masalah yang Kami Selesaikan', 'Apa yang Membuat ExIT Beda',
        'Target Market Kami', 'Business Model & Revenue', 'Roadmap',
        'Tim yang Kami Cari', 'Kompensasi & Equity', 'Komitmen Waktu & Cara Kerja', 'FAQ'
    ];
    return items.map((title, i) => `
        <a href="#section-${i + 1}" class="toc-item">
            <span class="toc-number">${String(i + 1).padStart(2, '0')}</span>
            <span class="toc-title">${title}</span>
        </a>
    `).join('');
}

function generateSection1() {
    return `
        <section id="section-1">
            <div class="section-marker"><span>01</span></div>
            <h1>Apa yang Kami Kerjakan</h1>
            <div class="highlight-box">
                <p><strong>ExIT adalah platform untuk membuat aplikasi bisnis</strong> seperti kasir, inventory, dan CRM dengan cara drag & drop — seperti main LEGO, tapi hasilnya aplikasi bisnis yang benar-benar bisa dipakai.</p>
            </div>
            <h2>Analoginya</h2>
            <div class="cards-grid">
                <div class="card">${icon('globe')}<div class="card-title">WordPress</div><div class="card-desc">Untuk website & blog</div></div>
                <div class="card">${icon('palette')}<div class="card-title">Canva</div><div class="card-desc">Untuk design grafis</div></div>
                <div class="card">${icon('box')}<div class="card-title">ExIT</div><div class="card-desc">Untuk aplikasi bisnis</div></div>
            </div>
            <h2>Kenapa Ini Penting?</h2>
            <div class="stats-row">
                <div class="stat"><div class="stat-value">2-6 Bulan</div><div class="stat-label">Waktu Normal</div></div>
                <div class="stat"><div class="stat-value">2-7 Hari</div><div class="stat-label">Dengan ExIT</div></div>
                <div class="stat"><div class="stat-value">90%</div><div class="stat-label">Lebih Cepat</div></div>
            </div>
        </section>
    `;
}

function generateSection2() {
    return `
        <section id="section-2">
            <div class="section-marker"><span>02</span></div>
            <h1>Masalah yang Kami Selesaikan</h1>
            <h3>Contoh: Toko Pak Budi</h3>
            <p>Pak Budi punya toko elektronik 3 cabang. Butuh: aplikasi kasir, inventory, laporan, dan CRM.</p>
            <table>
                <thead><tr><th>Opsi</th><th>Waktu</th><th>Biaya</th><th>Masalah</th></tr></thead>
                <tbody>
                    <tr><td>Hire Programmer</td><td>3-6 bulan</td><td>Rp 50-100jt</td><td>Mahal & lama</td></tr>
                    <tr><td>Software Jadi</td><td>Langsung</td><td>Rp 500rb-2jt/bln</td><td>Tidak pas workflow</td></tr>
                    <tr><td>Pakai Excel</td><td>Langsung</td><td>Gratis</td><td>Ribet, error</td></tr>
                </tbody>
            </table>
            <div class="note-box success">
                <div class="note-label">Dengan ExIT</div>
                <p>5-7 hari, Mulai dari Rp 500rb, aplikasi yang pas persis dengan kebutuhan, bisa offline.</p>
            </div>
        </section>
    `;
}

function generateSection3() {
    return `
        <section id="section-3">
            <div class="section-marker"><span>03</span></div>
            <h1>Apa yang Membuat ExIT Beda</h1>
            <h3>Satu Kali Buat, Jalan di Mana Aja</h3>
            <div class="cards-grid">
                <div class="card">${icon('globe')}<div class="card-title">Website</div><div class="card-desc">Chrome, Safari</div></div>
                <div class="card">${icon('mobile')}<div class="card-title">Mobile</div><div class="card-desc">Android & iOS</div></div>
                <div class="card">${icon('desktop')}<div class="card-title">Desktop</div><div class="card-desc">Windows & Mac</div></div>
                <div class="card">${icon('offline')}<div class="card-title">Offline</div><div class="card-desc">Tanpa internet</div></div>
            </div>
            <table>
                <thead><tr><th>Platform</th><th>Web</th><th>Mobile</th><th>Desktop</th><th>Offline</th></tr></thead>
                <tbody>
                    <tr><td>Webflow</td><td class="check">✓</td><td class="cross">—</td><td class="cross">—</td><td class="cross">—</td></tr>
                    <tr><td>Retool</td><td class="check">✓</td><td class="cross">—</td><td class="cross">—</td><td class="cross">—</td></tr>
                    <tr class="table-highlight"><td><strong>ExIT</strong></td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td></tr>
                </tbody>
            </table>
        </section>
    `;
}

function generateSection4() {
    return `
        <section id="section-4">
            <div class="section-marker"><span>04</span></div>
            <h1>Target Market</h1>
            <p>Fokus utama: <strong>UMKM lokal</strong> dengan omzet Rp 3-50 juta/bulan yang butuh sistem kasir & inventory sederhana.</p>
            <div class="cards-grid">
                <div class="card">${icon('store')}<div class="card-title">Toko Kelontong</div><div class="card-desc">Warung, sembako</div></div>
                <div class="card">${icon('food')}<div class="card-title">F&B Kecil</div><div class="card-desc">Warteg, warung makan</div></div>
                <div class="card">${icon('tools')}<div class="card-title">Jasa</div><div class="card-desc">Laundry, bengkel motor</div></div>
                <div class="card">${icon('store')}<div class="card-title">Retail Kecil</div><div class="card-desc">Toko HP, aksesoris</div></div>
            </div>
            <div class="note-box">
                <div class="note-label">Fakta UMKM Indonesia</div>
                <p>68% UMKM punya omzet < Rp 50 juta/tahun. 31% usaha mikro hanya punya laba bersih Rp 1 juta/bulan.</p>
            </div>
        </section>
    `;
}

function generateSection5() {
    return `
        <section id="section-5">
            <div class="section-marker"><span>05</span></div>
            <h1>Business Model</h1>
            <p><strong>Freemium + Kustomisasi</strong> — Fitur basic gratis, bayar untuk custom & fitur yang ga ada di kompetitor.</p>

            <h3>Kenapa Freemium?</h3>
            <div class="note-box">
                <p>Sudah banyak aplikasi kasir gratis: Kasir Pintar, iReap, Qasir, Loyverse. Kalau fitur basic sama, orang pasti pilih yang gratis. <strong>Kita bersaing di kustomisasi.</strong></p>
            </div>

            <h3>Pricing</h3>
            <table>
                <thead><tr><th>Tier</th><th>Harga</th><th>Fitur</th></tr></thead>
                <tbody>
                    <tr class="table-highlight"><td><strong>GRATIS</strong></td><td>Rp 0</td><td>POS basic, struk, laporan harian</td></tr>
                    <tr><td><strong>Kustomisasi</strong></td><td>Rp 500rb-2jt</td><td>Fitur custom sesuai kebutuhan</td></tr>
                    <tr><td><strong>Multi-Cabang</strong></td><td>Rp 1-3jt</td><td>Sync data, dashboard owner</td></tr>
                    <tr><td><strong>Maintenance</strong></td><td>Rp 200-500rb/tahun</td><td>Update, backup, support prioritas</td></tr>
                </tbody>
            </table>

            <h3>Apa yang Dibayar?</h3>
            <ul>
                <li><strong>Workflow custom</strong> — Sesuai cara kerja klien</li>
                <li><strong>Integrasi khusus</strong> — Pembukuan, printer, dll</li>
                <li><strong>Fitur unik</strong> — Yang kompetitor ga punya</li>
                <li><strong>Support personal</strong> — Langsung follow-up</li>
            </ul>

            <div class="stats-row">
                <div class="stat"><div class="stat-value">20-50</div><div class="stat-label">User Gratis Y1</div></div>
                <div class="stat"><div class="stat-value">5-15</div><div class="stat-label">Upgrade Berbayar</div></div>
                <div class="stat"><div class="stat-value">Rp 15-50jt</div><div class="stat-label">Revenue Y1</div></div>
            </div>
        </section>
    `;
}

function generateSection6() {
    return `
        <section id="section-6">
            <div class="section-marker"><span>06</span></div>
            <h1>Roadmap</h1>
            <div class="timeline">
                <div class="timeline-item"><div class="timeline-marker">Q1</div><div class="timeline-content"><h4>Foundation</h4><p>MVP launch, 2-3 pilot clients</p></div></div>
                <div class="timeline-item"><div class="timeline-marker">Q2</div><div class="timeline-content"><h4>Growth</h4><p>Mobile app, 5+ clients</p></div></div>
                <div class="timeline-item"><div class="timeline-marker">Q3</div><div class="timeline-content"><h4>Scale</h4><p>Partner program, 10+ clients</p></div></div>
                <div class="timeline-item"><div class="timeline-marker">Q4</div><div class="timeline-content"><h4>Expand</h4><p>Enterprise, regional</p></div></div>
            </div>
        </section>
    `;
}

function generateSection7() {
    return `
        <section id="section-7">
            <div class="section-marker"><span>07</span></div>
            <h1>Tim yang Kami Cari</h1>
            <em>(klik untuk detail)</em>
            <div class="cards-grid">
                <div class="card card-clickable" onclick="window.showJobModal('cmo')">${icon('users')}<div class="card-title">Marketing & Growth Lead</div><div class="card-desc">Akuisisi klien UMKM, validasi market, growth</div></div>
                <div class="card card-clickable" onclick="window.showJobModal('cfo')">${icon('users')}<div class="card-title">Finance & Strategy Lead</div><div class="card-desc">Pricing, analisis bisnis, keuangan</div></div>
                <div class="card card-clickable" onclick="window.showJobModal('designer')">${icon('design')}<div class="card-title">UI/UX Designer</div><div class="card-desc">Design system, komponen, template apps</div></div>
            </div>
        </section>
    `;
}

function generateSection8() {
    return `
        <section id="section-8">
            <div class="section-marker"><span>08</span></div>
            <h1>Kompensasi</h1>
            <div class="note-box">
                <p>Ini adalah <strong>project sampingan</strong>. Semua tim bekerja part-time, jadi model kompensasi berbasis hasil, bukan gaji tetap.</p>
            </div>
            <h3>Model Revenue Sharing</h3>
            <table>
                <thead><tr><th>Role</th><th>Share per Project</th><th>Keterangan</th></tr></thead>
                <tbody>
                    <tr><td><strong>Developer</strong></td><td>30-40%</td><td>Dari nilai kustomisasi</td></tr>
                    <tr><td><strong>Designer</strong></td><td>15-25%</td><td>Dari nilai kustomisasi</td></tr>
                    <tr><td><strong>Sales/BD</strong></td><td>10-20%</td><td>Dari closing deal</td></tr>
                    <tr><td><strong>Platform</strong></td><td>30-40%</td><td>Pengembangan & maintenance</td></tr>
                </tbody>
            </table>
            <p class="note-small">Contoh: Kustomisasi Rp 2jt → Developer dapat Rp 600-800rb</p>
        </section>
    `;
}

function generateSection9() {
    return `
        <section id="section-9">
            <div class="section-marker"><span>09</span></div>
            <h1>Cara Kerja</h1>
            <div class="highlight-box">
                <p>Ini <strong>side project</strong>, bukan full-time job. Kerjakan di waktu luang, sesuai kapasitas masing-masing.</p>
            </div>
            <h3>Ekspektasi</h3>
            <ul>
                <li><strong>Part-time</strong> — 5-15 jam/minggu sesuai kapasitas</li>
                <li><strong>Remote & async</strong> — Kerja dari mana aja, kapan aja</li>
                <li><strong>Weekly sync</strong> — 1x call singkat per minggu</li>
                <li><strong>Project-based</strong> — Ambil project sesuai availability</li>
            </ul>
        </section>
    `;
}

function generateSection10() {
    return `
        <section id="section-10">
            <div class="section-marker"><span>10</span></div>
            <h1>FAQ</h1>
            <div class="faq-grid">
                <div><strong>Sudah ada product?</strong><p>Ya, MVP sudah jalan dengan pilot clients.</p></div>
                <div><strong>Kapan dapat gaji?</strong><p>Full-time dari bulan pertama.</p></div>
                <div><strong>Kalau ga cocok?</strong><p>Trial period 3 bulan.</p></div>
                <div><strong>Ada investor?</strong><p>Bootstrapped. Seed round Q2-Q3 2026.</p></div>
            </div>
        </section>
    `;
}

// ============================================
// DESIGNER PAGE
// ============================================

function generateDesignerContent() {
    return `
        <div class="page-nav-top">
            <button class="page-nav-btn-back" onclick="window.navigateToPage('rekrutmen')">
                ← Kembali ke Rekrutmen
            </button>
        </div>

        <div class="section-marker"><span>Role</span></div>
        <h1>UI/UX Designer</h1>
        <p class="lead">Design the Future of App Building</p>

        <div class="two-col-simple">
            <div class="highlight-box">
                <h4>Builder Interface</h4>
                <p>Tampilan alat untuk build aplikasi. Seperti Figma-nya Figma.</p>
            </div>
            <div class="highlight-box">
                <h4>Component Library</h4>
                <p>Komponen drag & drop. Seperti stiker di Canva.</p>
            </div>
        </div>

        <h2>Roadmap Kerja</h2>
        <div class="responsibility-grid">
            <div class="resp-card">
                <span class="resp-month">Bulan 1-2</span>
                <h4>Brand Identity</h4>
                <p>Logo, color palette, typography, icon set, guidelines</p>
            </div>
            <div class="resp-card">
                <span class="resp-month">Bulan 2-4</span>
                <h4>Builder Interface</h4>
                <p>Drag & drop canvas, sidebar, property panel, preview</p>
            </div>
            <div class="resp-card">
                <span class="resp-month">Bulan 3-6</span>
                <h4>Component Library</h4>
                <p>20-30 komponen UI dengan variants, states, responsive</p>
            </div>
            <div class="resp-card">
                <span class="resp-month">Bulan 5-8</span>
                <h4>Template Apps</h4>
                <p>Template POS, CRM, Inventory, Accounting, HR</p>
            </div>
        </div>

        <div class="two-col-simple">
            <div>
                <h2>Tools</h2>
                <div class="tool-list">
                    <div class="tool-item"><strong>Figma</strong> <span>Main tool</span></div>
                    <div class="tool-item"><strong>Notion</strong> <span>Docs</span></div>
                    <div class="tool-item"><strong>Slack</strong> <span>Communication</span></div>
                </div>
            </div>
            <div>
                <h2>Learning Path</h2>
                <div class="learning-list">
                    <div><span class="learn-time">Week 1-2</span> Design systems, Atomic design</div>
                    <div><span class="learn-time">Month 1-3</span> Color, Typography, Accessibility</div>
                    <div><span class="learn-time">Month 4-6</span> Forms, Data viz, Micro-interactions</div>
                    <div><span class="learn-time">Month 7+</span> Design tokens, User testing</div>
                </div>
            </div>
        </div>

        <h2>Success Metrics</h2>
        <div class="metrics-row-compact">
            <div class="metric-box-compact">
                <div class="metric-period">M1-3</div>
                <p>Brand identity, Design system, 10 komponen</p>
            </div>
            <div class="metric-box-compact">
                <div class="metric-period">M4-6</div>
                <p>Builder interface, 20+ komponen, 1-2 template</p>
            </div>
            <div class="metric-box-compact">
                <div class="metric-period">M7-9</div>
                <p>3-5 template, Website, Marketing materials</p>
            </div>
            <div class="metric-box-compact">
                <div class="metric-period">M10-12</div>
                <p>Beta support, Iterate feedback, Library v2</p>
            </div>
        </div>

        <h2>FAQ Designer</h2>
        <div class="faq-grid">
            <div><strong>Baru pakai Figma 6 bulan?</strong><p>Cukup! Yang penting paham basic.</p></div>
            <div><strong>Perlu bisa coding?</strong><p>Tidak wajib, tapi HTML/CSS helps.</p></div>
            <div><strong>Belum bikin design system?</strong><p>Tidak masalah. Belajar bareng.</p></div>
        </div>

        <h2>Requirements</h2>
        <div class="requirements-grid">
            <div class="req-item">Paham Figma dasar</div>
            <div class="req-item">Portfolio 3-5 project</div>
            <div class="req-item">Suka design digital</div>
            <div class="req-item">Detail-oriented</div>
            <div class="req-item">Mau belajar UX</div>
            <div class="req-item">Bisa design handoff</div>
        </div>

        <div class="page-nav">
            <button class="page-nav-btn-back" onclick="window.navigateToPage('rekrutmen')">
                ← Kembali ke Rekrutmen Overview
            </button>
        </div>
    `;
}

// Expose navigation function globally
window.navigateToPage = navigateTo;
