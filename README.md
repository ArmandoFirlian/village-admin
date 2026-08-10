# 🏘️ Sistem Informasi & Profil Padukuhan Ngentak

Aplikasi web interaktif dan responsif untuk menyajikan data statistik kependudukan, wilayah administrasi RT, peta wilayah, serta direktori potensi lokal berupa wisata dan UMKM **Padukuhan Ngentak, Kalurahan Poncosari, Kapanewon Srandakan, Kabupaten Bantul**.

Website ini dikembangkan sebagai media informasi digital untuk membantu masyarakat mengenal kondisi kependudukan, wilayah administrasi, potensi wisata, serta usaha lokal yang terdapat di Padukuhan Ngentak.

🌐 **Live Demo:** [www.profil-padukuhan-ngentak.my.id](https://www.profil-padukuhan-ngentak.my.id/)

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi](#-teknologi)
- [Struktur Proyek](#-struktur-proyek)
- [Instalasi & Penggunaan](#-instalasi--penggunaan)
- [Struktur Data Dashboard](#-struktur-data-dashboard)
- [Deployment](#-deployment)
- [Kontribusi](#-kontribusi)
- [Lisensi](#-lisensi)

---

## ✨ Fitur Utama

### 📊 Dashboard Kependudukan

Dashboard menyediakan ringkasan data kependudukan Padukuhan Ngentak dalam bentuk visualisasi yang mudah dipahami.

Fitur yang tersedia meliputi:

- **Total Penduduk**
  - Menampilkan jumlah keseluruhan penduduk.
- **Data Jenis Kelamin**
  - Menampilkan jumlah penduduk laki-laki dan perempuan.
  - Disajikan menggunakan visualisasi radial progress.
- **Distribusi Umur**
  - Menampilkan jumlah penduduk berdasarkan kelompok umur.
  - Kelompok umur meliputi:
    - 0–5 tahun
    - 6–12 tahun
    - 13–17 tahun
    - 18–25 tahun
    - 26–45 tahun
    - 46–60 tahun
    - 61+ tahun
- **Data Pekerjaan**
  - Menampilkan distribusi pekerjaan atau sektor utama penduduk.
  - Disajikan menggunakan horizontal bar chart.
- **Jumlah RT**
  - Menampilkan wilayah administrasi RT yang terdapat di Padukuhan Ngentak.

---

### 🗺️ Peta & Wilayah Administrasi

Website menyediakan informasi wilayah administrasi Padukuhan Ngentak yang terbagi menjadi **RT 01 sampai RT 06**.

Fitur yang tersedia:

- Visualisasi peta wilayah Padukuhan Ngentak.
- Pembagian wilayah berdasarkan RT.
- Pemilihan wilayah RT melalui kartu informasi.
- Informasi detail masing-masing RT.
- Data jumlah penduduk pada setiap RT.
- Data pekerjaan penduduk.
- Distribusi kelompok umur.
- Informasi ketua RT.
- Interaksi antara wilayah peta dan data RT.

Visualisasi wilayah menggunakan aset peta dan SVG yang terdapat di dalam repository.

---

### 🏖️ Direktori Wisata

Halaman **Wisata & UMKM** menyediakan informasi mengenai potensi wisata yang berada di sekitar Padukuhan Ngentak.

Beberapa potensi wisata yang ditampilkan antara lain:

- **Pantai Baru**
- **Muara Pandansimo**
- Potensi wisata lokal lainnya di sekitar wilayah Padukuhan Ngentak.

Informasi wisata dapat digunakan sebagai media pengenalan destinasi dan potensi lokal kepada masyarakat maupun pengunjung.

---

### 🏪 Direktori UMKM Lokal

Website juga menyediakan katalog usaha warga sebagai bagian dari potensi ekonomi lokal Padukuhan Ngentak.

Informasi UMKM dapat mencakup:

- Nama atau jenis usaha.
- Produk lokal.
- Kuliner.
- Kerajinan.
- Jasa warga.
- Informasi pendukung lainnya.

Bagian ini ditujukan sebagai media promosi dan pengenalan produk usaha masyarakat lokal.

---

## 🛠️ Teknologi

| Sektor | Teknologi / Tools |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| **Styling** | CSS3, Flexbox, CSS Grid, Responsive Design |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Code Quality** | ESLint, Prettier |
| **Version Control** | Git & GitHub |
| **Deployment** | Vercel |
| **Domain** | Custom Domain |
| **Database / Backend** | Supabase (opsional) |

---

## 📁 Struktur Proyek

Struktur repository saat ini:

```text
village-admin/
├── .vscode/                         # Konfigurasi Visual Studio Code
│
├── .workflows/                      # Konfigurasi workflow/proses otomatis
│
├── assets/                          # Gambar dan aset pendukung website
│
├── public/                          # Asset statis publik
│
├── src/                             # Source code tambahan/proyek
│
├── .eslintrc.json                   # Konfigurasi ESLint
├── .gitignore                       # File dan folder yang diabaikan Git
│
├── Ngentaks.jpg                     # Gambar Padukuhan Ngentak
├── favicon.ico                      # Favicon website
│
├── index.html                       # Halaman utama Dashboard & Profil
├── wisata-umkm.html                 # Halaman Direktori Wisata & UMKM
│
├── map.jpg                           # Peta wilayah
├── map-image.svg                     # Visualisasi / overlay peta
├── mapis.jpg                         # Aset gambar peta
├── maps.jpg                          # Aset gambar peta
│
├── script.js                         # Logika aplikasi dan interaksi
├── styles.css                        # Styling dan desain utama website
├── supabaseClient.js                 # Konfigurasi koneksi Supabase
│
├── package.json                      # Manifest proyek dan dependensi npm
├── vite.config.js                    # Konfigurasi Vite
├── tukik.JPG                         # Aset gambar pendukung
└── README.md                         # Dokumentasi proyek
```

> Struktur di atas mengikuti file dan folder yang terdapat pada repository saat ini.

---

## 🚀 Instalasi & Penggunaan

### 1. Clone Repository

```bash
git clone https://github.com/ArmandoFirlian/village-admin.git
```

Masuk ke direktori proyek:

```bash
cd village-admin
```

---

### 2. Install Dependencies

Jalankan:

```bash
npm install
```

---

### 3. Menjalankan Development Server

Gunakan:

```bash
npm run dev
```

Setelah berhasil dijalankan, Vite akan menyediakan alamat development server, biasanya:

```text
http://localhost:5173
```

---

### 4. Build Production

Untuk membuat versi production:

```bash
npm run build
```

Hasil build akan digunakan sebagai output deployment.

---

### 5. Preview Production

Untuk melihat hasil build secara lokal:

```bash
npm run preview
```

---

## 📈 Struktur Data Dashboard

Dashboard menggunakan beberapa kelompok data utama untuk menyajikan informasi kependudukan.

### Data Penduduk

Data penduduk digunakan untuk menampilkan:

```text
Total Penduduk
├── Laki-laki
└── Perempuan
```

### Data Kelompok Umur

```text
Kelompok Umur
├── 0–5
├── 6–12
├── 13–17
├── 18–25
├── 26–45
├── 46–60
└── 61+
```

### Data Wilayah RT

```text
Padukuhan Ngentak
├── RT 01
├── RT 02
├── RT 03
├── RT 04
├── RT 05
└── RT 06
```

Setiap wilayah RT dapat memiliki informasi penduduk, kelompok umur, pekerjaan, serta informasi ketua RT.

---

## 🗺️ Peta Wilayah

Website menggunakan aset peta untuk memberikan gambaran wilayah administrasi Padukuhan Ngentak.

Komponen peta terdiri dari:

- `map.jpg`
- `map-image.svg`
- `mapis.jpg`
- `maps.jpg`

SVG digunakan untuk mendukung visualisasi wilayah yang dapat dihubungkan dengan data RT pada halaman dashboard.

---

## 🌐 Deployment

Website dideploy menggunakan **Vercel** dan dihubungkan dengan repository GitHub.

Alur deployment:

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
Vercel
    │
    ▼
Build Vite
    │
    ▼
Production
    │
    ▼
Custom Domain
    │
    ▼
www.profil-padukuhan-ngentak.my.id
```

Setiap perubahan yang telah di-push ke repository dapat diproses melalui pipeline deployment Vercel sesuai konfigurasi project.

---

## 🔗 Repository & Website

**GitHub Repository**

https://github.com/ArmandoFirlian/village-admin

**Website**

https://www.profil-padukuhan-ngentak.my.id/

---

## 🤝 Kontribusi

Kontribusi untuk pengembangan website dapat dilakukan melalui GitHub.

Langkah umum:

1. Fork repository.
2. Buat branch baru.
3. Lakukan perubahan atau pengembangan fitur.
4. Commit perubahan.
5. Push branch ke repository.
6. Buat Pull Request.

Contoh:

```bash
git checkout -b feature/nama-fitur
```

Kemudian:

```bash
git add .
git commit -m "feat: menambahkan fitur baru"
git push origin feature/nama-fitur
```

---

## 📄 Lisensi

Proyek ini dibuat untuk kebutuhan pengembangan dan penyediaan informasi digital **Padukuhan Ngentak, Kalurahan Poncosari, Kapanewon Srandakan, Kabupaten Bantul**.

Penggunaan, pengembangan, dan distribusi ulang kode dapat disesuaikan dengan kebutuhan proyek dan kesepakatan pengelola.

---

## 👨‍💻 Pengembang

**Armando Firlian**


Repository:

https://github.com/ArmandoFirlian/village-admin

Website:

https://www.profil-padukuhan-ngentak.my.id/
