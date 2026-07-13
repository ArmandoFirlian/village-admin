# 🏘️ Sistem Informasi Administrasi Padukuhan Ngentak

Aplikasi web profesional untuk mengelola data administrasi, kependudukan, dan informasi geografis **Padukuhan Ngentak, Poncosari**.

## 📋 Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Struktur Proyek](#struktur-proyek)
- [Lisensi](#lisensi)

## ✨ Fitur

### Dashboard Utama
- 📊 **Statistik Penduduk**: Total, jenis kelamin, kategori umur
- 👥 **Data Lapisan RT**: Kategori per RT dengan detail lengkap
- 📈 **Analisis Pekerjaan**: Distribusi pekerjaan penduduk

### Profil & Informasi
- 🏘️ **Profil Padukuhan**: Informasi lengkap Dusun Ngentak
- 🗺️ **Peta Wilayah**: Visualisasi geografis dengan legenda RT
- 👨‍🎓 **Profil KKN**: Dokumentasi program KKN

### Visualisasi Data
- 📊 Chart interaktif dengan data real-time
- 🎨 UI/UX yang responsif dan modern
- 📱 Mobile-friendly design

## 🛠️ Teknologi

| Kategori | Tools |
|----------|-------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Build Tool** | Vite |
| **Code Quality** | ESLint, Prettier |
| **Version Control** | Git & GitHub |

## 📦 Instalasi

### Prerequisites
- Node.js v16+ ([Download](https://nodejs.org/))
- npm atau yarn
- Git

### Step-by-Step

```bash
# Clone repository
git clone https://github.com/ArmandoFirlian/village-admin.git
cd village-admin

# Install dependencies
npm install

# Setup development environment
npm run dev

# Build untuk production
npm run build
```

## 🚀 Penggunaan

### Development Mode
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:3000` dengan hot reload.

### Production Build
```bash
npm run build
```
Output production tersimpan di folder `dist/`.

### Preview Production Build
```bash
npm run preview
```

### Linting & Code Quality
```bash
# Check code quality
npm run lint

# Auto-fix issues
npm run lint:fix
```

## 📁 Struktur Proyek

```
village-admin/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── maps/
│   ├── js/
│   │   └── script.js        # Main JavaScript logic
│   ├── css/
│   │   └── styles.css       # Styling
│   └── index.html           # Entry point
├── public/
│   ├── map.jpg              # Map visualization
│   └── map-image.svg        # SVG map template
├── dist/                    # Production build output
├── package.json             # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── .eslintrc.json          # ESLint rules
├── .gitignore              # Git ignore rules
└── README.md               # Documentation
```

## 📊 Data Dashboard

### Statistik Utama
- **Total Penduduk**: 824 orang
- **Jumlah RT**: 6 (RT 01 - RT 06)
- **Jenis Kelamin**: 412 Pria, 412 Wanita
- **Kategori Umur**: 7 kategori (0-5, 6-12, 13-17, 18-25, 26-45, 46-60, 61+)
- **Profesi Utama**: Petani, Buruh, Pedagang, PNS, IRT

### Fitur RT
Setiap RT memiliki data:
- Jumlah penduduk per jenis kelamin
- Distribusi umur
- Kategori pekerjaan
- Pemimpin RT
- Pekerjaan utama

## 🎯 Roadmap

- [ ] Tambah login system
- [ ] Database integration (MongoDB/MySQL)
- [ ] Export data ke PDF/Excel
- [ ] Mobile app (React Native)
- [ ] Real-time data update
- [ ] API backend (Node.js/Express)
- [ ] Advanced analytics
- [ ] Multi-language support

## 🤝 Kontribusi

Untuk berkontribusi:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Lisensi

Project ini menggunakan lisensi **MIT**. Lihat file [LICENSE](LICENSE) untuk detail.

## 👤 Author

**Armando Firlian**
- GitHub: [@ArmandoFirlian](https://github.com/ArmandoFirlian)
- Location: Indonesia

## 📧 Kontak & Support

Untuk pertanyaan atau masalah:
- Buka [GitHub Issues](https://github.com/ArmandoFirlian/village-admin/issues)
- Email: armando@example.com

---

**Made with ❤️ for Padukuhan Ngentak Poncosari**
