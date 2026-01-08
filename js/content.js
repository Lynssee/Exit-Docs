/**
 * Content Loader Module
 * Loads document sections dynamically
 */

const contentLoader = document.getElementById('content-loader');

export function loadContent() {
    contentLoader.innerHTML = generateContent();
}

function generateContent() {
    return `
        <!-- Table of Contents -->
        <div class="section-marker"><span>Daftar Isi</span></div>
        <h1>Navigasi Dokumen</h1>
        
        <div class="toc">
            ${generateTocItems()}
        </div>

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
        'Apa yang Kami Kerjakan',
        'Masalah yang Kami Selesaikan',
        'Apa yang Membuat ExIT Beda',
        'Target Market Kami',
        'Business Model & Revenue',
        'Roadmap',
        'Tim yang Kami Cari',
        'Kompensasi & Equity',
        'Komitmen Waktu & Cara Kerja',
        'FAQ'
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
                <p><strong>ExIT adalah platform untuk membuat aplikasi bisnis</strong> seperti aplikasi kasir, inventory, dan CRM dengan cara drag & drop — seperti main LEGO, tapi hasilnya adalah aplikasi bisnis yang benar-benar bisa dipakai.</p>
            </div>

            <h2>Analoginya</h2>
            <div class="cards-grid">
                <div class="card">
                    <div class="card-icon">🌐</div>
                    <div class="card-title">WordPress</div>
                    <div class="card-desc">Untuk buat website & blog</div>
                </div>
                <div class="card">
                    <div class="card-icon">🎨</div>
                    <div class="card-title">Canva</div>
                    <div class="card-desc">Untuk buat design grafis</div>
                </div>
                <div class="card">
                    <div class="card-icon">◼</div>
                    <div class="card-title">ExIT</div>
                    <div class="card-desc">Untuk buat aplikasi bisnis lengkap</div>
                </div>
            </div>

            <h2>Kenapa Ini Penting?</h2>
            <div class="stats-row">
                <div class="stat">
                    <div class="stat-value">2-6 Bulan</div>
                    <div class="stat-label">Waktu Normal</div>
                </div>
                <div class="stat">
                    <div class="stat-value">2-7 Hari</div>
                    <div class="stat-label">Dengan ExIT</div>
                </div>
                <div class="stat">
                    <div class="stat-value">90%</div>
                    <div class="stat-label">Lebih Cepat</div>
                </div>
            </div>

            <p>Biasanya, perusahaan butuh <strong>2-6 bulan</strong> dan <strong>puluhan juta rupiah</strong> untuk buat aplikasi custom. Dengan ExIT, bisa jadi <strong>2-7 hari</strong> aja.</p>
        </section>
        <div class="page-break"></div>
    `;
}

function generateSection2() {
    return `
        <section id="section-2">
            <div class="section-marker"><span>02</span></div>
            <h1>Masalah yang Kami Selesaikan</h1>

            <h2>Contoh Kasus Nyata</h2>
            <h3>Toko Pak Budi</h3>

            <p>Pak Budi punya toko elektronik dengan 3 cabang. Dia butuh:</p>
            <ul>
                <li><strong>Aplikasi kasir</strong> yang bisa catat transaksi & cetak struk</li>
                <li><strong>Sistem inventory</strong> buat track stok di 3 cabang</li>
                <li><strong>Laporan penjualan</strong> harian yang bisa dibuka di HP</li>
                <li><strong>Kelola data customer</strong> & program loyalitas</li>
            </ul>

            <h3>Opsi yang Tersedia Sekarang</h3>
            <table>
                <thead>
                    <tr><th>Opsi</th><th>Waktu</th><th>Biaya</th><th>Masalah</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Hire Programmer</strong></td><td>3-6 bulan</td><td>Rp 50-100 juta</td><td>Mahal & lama</td></tr>
                    <tr><td><strong>Software Jadi</strong></td><td>Langsung</td><td>Rp 500rb-2jt/bulan</td><td>Tidak pas dengan workflow</td></tr>
                    <tr><td><strong>Pakai Excel</strong></td><td>Langsung</td><td>Gratis</td><td>Ribet, rawan error</td></tr>
                </tbody>
            </table>

            <div class="note-box success">
                <div class="note-label">Dengan ExIT Platform</div>
                <ul>
                    <li>Waktu: <strong>5-7 hari</strong></li>
                    <li>Biaya: <strong>Rp 20-30 juta</strong> (one-time) atau <strong>Rp 3-5 juta/bulan</strong></li>
                    <li>Hasil: Aplikasi yang <strong>pas persis</strong> dengan kebutuhan</li>
                    <li>Bonus: Bisa dibuka di <strong>web, HP, dan komputer</strong></li>
                </ul>
            </div>
        </section>
        <div class="page-break"></div>
    `;
}

function generateSection3() {
    return `
        <section id="section-3">
            <div class="section-marker"><span>03</span></div>
            <h1>Apa yang Membuat ExIT Beda</h1>

            <h2>Universal Platform</h2>
            <h3>Satu Kali Buat, Jalan di Mana Aja</h3>

            <div class="cards-grid">
                <div class="card"><div class="card-icon">🌐</div><div class="card-title">Website</div><div class="card-desc">Browser Chrome, Safari</div></div>
                <div class="card"><div class="card-icon">📱</div><div class="card-title">Mobile</div><div class="card-desc">Android & iPhone</div></div>
                <div class="card"><div class="card-icon">💻</div><div class="card-title">Desktop</div><div class="card-desc">Windows & Mac</div></div>
                <div class="card"><div class="card-icon">📴</div><div class="card-title">Offline</div><div class="card-desc">Tanpa internet</div></div>
            </div>

            <h3>Dibanding Kompetitor</h3>
            <table>
                <thead><tr><th>Platform</th><th>Web</th><th>Mobile</th><th>Desktop</th><th>Offline</th></tr></thead>
                <tbody>
                    <tr><td>Webflow</td><td class="check">✓</td><td class="cross">—</td><td class="cross">—</td><td class="cross">—</td></tr>
                    <tr><td>Retool</td><td class="check">✓</td><td class="cross">—</td><td class="cross">—</td><td class="cross">—</td></tr>
                    <tr><td>Bubble</td><td class="check">✓</td><td class="cross">—</td><td class="cross">—</td><td class="cross">—</td></tr>
                    <tr class="table-highlight"><td><strong>ExIT</strong></td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td></tr>
                </tbody>
            </table>

            <div class="divider-accent"></div>

            <h2>Bisa Buat Aplikasi Apa Aja</h2>
            <h3>Aplikasi Bisnis</h3>
            <ul>
                <li><strong>POS / Kasir</strong> — Scan barcode, payment, struk</li>
                <li><strong>Inventory</strong> — Track stok multi-gudang</li>
                <li><strong>Accounting</strong> — Invoice, laporan keuangan</li>
                <li><strong>CRM</strong> — Database customer, pipeline</li>
                <li><strong>ERP</strong> — Terintegrasi lengkap</li>
            </ul>

            <div class="highlight-box">
                <p style="font-size: 18px; text-align: center;"><strong>Kalau bisa dibayangkan, bisa dibangun.</strong></p>
            </div>
        </section>
        <div class="page-break"></div>
    `;
}

function generateSection4() {
    return `
        <section id="section-4">
            <div class="section-marker"><span>04</span></div>
            <h1>Target Market Kami</h1>

            <h2>Siapa yang Kami Bantu?</h2>
            <h3>Primary Market</h3>
            <div class="cards-grid">
                <div class="card"><div class="card-icon">🏪</div><div class="card-title">UMKM & Retail</div><div class="card-desc">Toko, minimarket, elektronik</div></div>
                <div class="card"><div class="card-icon">🍽️</div><div class="card-title">F&B</div><div class="card-desc">Restoran, cafe, katering</div></div>
                <div class="card"><div class="card-icon">🏥</div><div class="card-title">Healthcare</div><div class="card-desc">Klinik, apotek, lab</div></div>
                <div class="card"><div class="card-icon">🔧</div><div class="card-title">Services</div><div class="card-desc">Bengkel, salon, laundry</div></div>
            </div>

            <h3>Karakteristik Klien Ideal</h3>
            <ul>
                <li>Punya 2+ cabang atau berencana expand</li>
                <li>Omzet Rp 100 juta - Rp 5 miliar per bulan</li>
                <li>Sudah pakai Excel tapi mulai ribet</li>
                <li>Mau aplikasi custom tapi budget terbatas</li>
            </ul>

            <h2>Use Case & Pricing</h2>
            <table>
                <thead><tr><th>Use Case</th><th>Fitur Utama</th><th>One-Time</th><th>Per Bulan</th></tr></thead>
                <tbody>
                    <tr><td><strong>Toko Retail</strong></td><td>POS, Inventory, Laporan</td><td>Rp 30 juta</td><td>Rp 5 juta</td></tr>
                    <tr><td><strong>Restoran</strong></td><td>POS waiter, Kitchen display</td><td>Rp 40 juta</td><td>Rp 7 juta</td></tr>
                    <tr><td><strong>Klinik</strong></td><td>EMR, Inventory obat, Billing</td><td>Rp 50 juta</td><td>Rp 8 juta</td></tr>
                </tbody>
            </table>
        </section>
        <div class="page-break"></div>
    `;
}

function generateSection5() {
    return `
        <section id="section-5">
            <div class="section-marker"><span>05</span></div>
            <h1>Business Model & Revenue</h1>

            <h2>Dua Model Pricing</h2>
            <h3>Model 1: Project-Based</h3>
            <table>
                <thead><tr><th>Aplikasi</th><th>Kompleksitas</th><th>Harga</th></tr></thead>
                <tbody>
                    <tr><td>POS sederhana</td><td>Low</td><td>Rp 20-30 juta</td></tr>
                    <tr><td>POS + Inventory</td><td>Medium</td><td>Rp 35-50 juta</td></tr>
                    <tr><td>ERP multi-modul</td><td>High</td><td>Rp 80-150 juta</td></tr>
                </tbody>
            </table>

            <h3>Model 2: Subscription</h3>
            <table>
                <thead><tr><th>Paket</th><th>User</th><th>Per Bulan</th></tr></thead>
                <tbody>
                    <tr><td>Starter</td><td>1-5</td><td>Rp 3-5 juta</td></tr>
                    <tr><td>Professional</td><td>5-20</td><td>Rp 8-15 juta</td></tr>
                    <tr><td>Enterprise</td><td>20+</td><td>Rp 20-50 juta</td></tr>
                </tbody>
            </table>

            <h2>Revenue Projection</h2>
            <div class="stats-row">
                <div class="stat"><div class="stat-value">5-10</div><div class="stat-label">Target Klien Y1</div></div>
                <div class="stat"><div class="stat-value">Rp 344-800jt</div><div class="stat-label">Revenue Y1</div></div>
                <div class="stat"><div class="stat-value">Month 15-20</div><div class="stat-label">Break-Even</div></div>
            </div>
        </section>
        <div class="page-break"></div>
    `;
}

function generateSection6() {
    return `
        <section id="section-6">
            <div class="section-marker"><span>06</span></div>
            <h1>Roadmap</h1>

            <div class="timeline">
                <div class="timeline-item"><div class="timeline-marker">Q1</div><div class="timeline-content"><h4>Foundation</h4><p>Core platform, MVP launch, 2-3 pilot clients</p></div></div>
                <div class="timeline-item"><div class="timeline-marker">Q2</div><div class="timeline-content"><h4>Growth</h4><p>Template library, mobile app, 5+ clients</p></div></div>
                <div class="timeline-item"><div class="timeline-marker">Q3</div><div class="timeline-content"><h4>Scale</h4><p>Partner program, integrations, 10+ clients</p></div></div>
                <div class="timeline-item"><div class="timeline-marker">Q4</div><div class="timeline-content"><h4>Expand</h4><p>Enterprise features, regional expansion</p></div></div>
            </div>
        </section>
    `;
}

function generateSection7() {
    return `
        <section id="section-7">
            <div class="section-marker"><span>07</span></div>
            <h1>Tim yang Kami Cari</h1>

            <p>Kami mencari individu yang passionate dan comfortable dengan startup environment.</p>

            <div class="cards-grid">
                <div class="card"><div class="card-title">Full-Stack Developer</div><div class="card-desc">React/Vue, Node.js, PostgreSQL</div></div>
                <div class="card"><div class="card-title">Mobile Developer</div><div class="card-desc">React Native atau Flutter</div></div>
                <div class="card"><div class="card-title">UI/UX Designer</div><div class="card-desc">Figma expert, enterprise apps</div></div>
                <div class="card"><div class="card-title">Business Development</div><div class="card-desc">B2B sales, UMKM network</div></div>
            </div>
        </section>
    `;
}

function generateSection8() {
    return `
        <section id="section-8">
            <div class="section-marker"><span>08</span></div>
            <h1>Kompensasi & Equity</h1>

            <table>
                <thead><tr><th>Role Level</th><th>Base Salary</th><th>Equity</th></tr></thead>
                <tbody>
                    <tr><td>Junior</td><td>Below market</td><td>0.5-1%</td></tr>
                    <tr><td>Mid-Level</td><td>Market rate</td><td>1-2%</td></tr>
                    <tr><td>Senior/Lead</td><td>Competitive</td><td>2-4%</td></tr>
                    <tr><td>Co-Founder</td><td>Negotiable</td><td>5%+</td></tr>
                </tbody>
            </table>

            <div class="note-box">
                <div class="note-label">Vesting Schedule</div>
                <p>4-year vesting dengan 1-year cliff. Monthly vesting setelah cliff.</p>
            </div>
        </section>
    `;
}

function generateSection9() {
    return `
        <section id="section-9">
            <div class="section-marker"><span>09</span></div>
            <h1>Komitmen Waktu & Cara Kerja</h1>

            <h3>Work Arrangement</h3>
            <ul>
                <li><strong>Remote-first</strong> — Work from anywhere</li>
                <li><strong>Async communication</strong> — Tidak perlu 9-5</li>
                <li><strong>Weekly sync</strong> — 1-2x video call/minggu</li>
                <li><strong>Quarterly meetup</strong> — Face-to-face tiap quarter</li>
            </ul>

            <h3>Time Commitment</h3>
            <table>
                <thead><tr><th>Type</th><th>Hours/Week</th><th>Best For</th></tr></thead>
                <tbody>
                    <tr><td>Full-time</td><td>40+</td><td>All-in commitment</td></tr>
                    <tr><td>Part-time</td><td>20-30</td><td>Other commitments</td></tr>
                    <tr><td>Advisor</td><td>5-10</td><td>Strategic guidance</td></tr>
                </tbody>
            </table>
        </section>
    `;
}

function generateSection10() {
    return `
        <section id="section-10">
            <div class="section-marker"><span>10</span></div>
            <h1>FAQ</h1>

            <h4>Sudah ada product-nya?</h4>
            <p>Ya, MVP sudah jalan dan dipakai pilot clients. Fokus sekarang: scaling.</p>

            <h4>Kapan mulai dapat gaji?</h4>
            <p>Full-time bisa dari bulan pertama. Part-time biasanya equity-focused.</p>

            <h4>Gimana kalau ga cocok?</h4>
            <p>Trial period 3 bulan. Bisa part ways secara profesional.</p>

            <h4>Ada investor?</h4>
            <p>Currently bootstrapped. Planning seed round Q2-Q3 2026.</p>

            <h4>Kenapa join sekarang?</h4>
            <p>Early team = most equity & biggest impact on company direction.</p>
        </section>
    `;
}
