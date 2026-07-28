# 🏘️ Sistem Informasi & Profil Padukuhan Ngentak

Aplikasi web interaktif dan responsif untuk menyajikan data statistik kependudukan, wilayah administrasi RT, peta interaktif, serta direktori potensi lokal (Wisata & UMKM) **Padukuhan Ngentak, Kalurahan Poncosari, Kapanewon Srandakan, Kabupaten Bantul**.

🌐 **Live Demo:** [www.profil-padukuhan-ngentak.my.id](https://www.profil-padukuhan-ngentak.my.id/)

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi](#-teknologi)
- [Struktur Proyek](#-struktur-proyek)
- [Instalasi & Penggunaan](#-instalasi--penggunaan)
- [Struktur Data Dashboard](#-struktur-data-dashboard)
- [Kontribusi](#-kontribusi)
- [Lisensi](#-lisensi)

---

## ✨ Fitur Utama

### 📊 Dashboard Statistics
* **Ringkasan Penduduk:** Menampilkan total populasi, rasio jenis kelamin (pria/wanita), dan jumlah RT secara statistik real-time dengan animasi counter.
* **Visualisasi Demografi:**
  * Chart rasio jenis kelamin interaktif (Radial Progress).
  * Distribusi kategori umur penduduk (Column Chart).
  * Analisis profesi/sektor pekerjaan utama warga (Horizontal Bar Chart).

### 🗺️ Peta & Wilayah Administrasi (RT 01 - RT 06)
* **Peta Interaktif:** Peta wilayah padukuhan dengan elemen SVG yang terhubung langsung dengan *state* wilayah RT.
* **Detail RT Terpilih:** Menampilkan rincian data populasi, data pekerjaan, kategori umur, serta nama ketua RT secara dinamis saat kartu RT atau wilayah peta diklik.

### 🏖️ Direktori Potensi Lokal (Wisata & UMKM)
* **Destinasi Wisata:** Informasi objek wisata sekitar seperti *Pantai Baru* dan *Muara Pandansimo*.
* **Katalog UMKM:** Wadah promosi usaha lokal, kerajinan, kuliner, dan jasa warga setempat.

---

## 🛠️ Teknologi

| Sektor | Teknologi / Tools |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Modern Flexbox & Grid), Vanilla JavaScript (ES6+) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Code Quality** | ESLint, Prettier |
| **Deployment** | GitHub Pages / Custom Domain |

---

## 📁 Struktur Proyek

```text
village-admin/
├── public/                  # Asset statis publik
│   ├── favicon.ico          # Favicon website
│   ├── map.jpg              # Peta acuan
│   └── map-image.svg        # SVG overlay peta interaktif
├── src/                     # Source code utama
│   ├── assets/              # Gambar & media pendukung
│   ├── css/
│   │   └── styles.css       # Design & stylesheet utama
│   └── js/
│       ├── script.js        # Logika aplikasi, state render, & interaksi
│       └── supabaseClient.js# Konfigurasi integrasi Supabase (opsional)
├── index.html               # Halaman utama (Dashboard & Profil)
├── wisata-umkm.html         # Halaman Direktori Wisata & UMKM
├── package.json             # Manifest dependensi & skrip npm
├── vite.config.js           # Konfigurasi Vite
└── README.md                # Dokumentasi proyek
