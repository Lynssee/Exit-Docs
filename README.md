# ExIT Platform - Dokumentasi Rekrutmen

Dokumentasi rekrutmen ExIT Platform dengan Firebase Authentication dan Cloudflare Pages deployment.

## Project Structure

```
Exit Docs/
├── index.html              # Main entry point
├── css/
│   └── styles.css          # All styling
├── js/
│   ├── firebase-config.js  # Firebase configuration
│   ├── auth.js             # Authentication module
│   ├── content.js          # Document content generator
│   └── app.js              # Main application logic
└── README.md
```

## Setup Instructions

### 1. Firebase Setup

1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Buat project baru atau pilih yang sudah ada
3. Pergi ke **Project Settings > General > Your apps**
4. Klik **Add app** dan pilih **Web (</>)**
5. Register app dan copy konfigurasi
6. Edit `js/firebase-config.js` dan ganti placeholder dengan config asli:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

7. Enable Authentication:
   - Pergi ke **Authentication > Sign-in method**
   - Enable **Email/Password**
   - Enable **Google**

8. Tambahkan user yang boleh akses:
   - Pergi ke **Authentication > Users**
   - Klik **Add user**
   - Masukkan email dan password

### 2. GitHub Repository Setup

1. Buat repository baru di GitHub
2. Push semua files:

```bash
cd "Exit Docs"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

### 3. Cloudflare Pages Deployment

1. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Pergi ke **Workers & Pages > Create application > Pages**
3. Klik **Connect to Git**
4. Pilih repository GitHub Anda
5. Konfigurasi build:
   - **Build command:** (kosongkan)
   - **Build output directory:** `/`
6. Klik **Save and Deploy**

### 4. Add Domain to Firebase

Setelah deploy ke Cloudflare:
1. Copy domain Cloudflare Anda (misal: `your-project.pages.dev`)
2. Di Firebase Console, pergi ke **Authentication > Settings > Authorized domains**
3. Klik **Add domain** dan tambahkan domain Cloudflare

## Development

Untuk development lokal, gunakan live server:

```bash
# Menggunakan VS Code Live Server extension
# atau
npx serve .
```

## Maintenance

### Menambah Konten Baru

Edit `js/content.js` untuk menambah/mengubah konten dokumen.

### Mengubah Styling

Edit `css/styles.css`. Gunakan CSS variables di `:root` untuk konsistensi.

### Menambah Fitur Auth

Edit `js/auth.js` untuk menambah metode login baru atau custom logic.
