## 1. Persiapan Tools

Pastikan tools berikut sudah tersedia:

- Node.js dan npm
- Visual Studio Code
- Ionic CLI
- Browser untuk menguji aplikasi

### A. Instal Node.js dan npm

1. Buka situs resmi Node.js: https://nodejs.org/
2. Unduh versi **LTS (Long Term Support)** yang direkomendasikan.
3. Jalankan file installer yang telah diunduh.
4. Ikuti petunjuk instalasi hingga selesai. Pastikan opsi penambahan Node.js ke PATH tetap aktif jika tersedia.
5. Tutup dan buka kembali terminal VS Code agar konfigurasi terbaru terbaca.

npm akan ikut terinstal bersama Node.js.

### B. Periksa Instalasi

Buka terminal di Visual Studio Code, kemudian jalankan:

```bash
node -v
npm -v
```

Jika kedua perintah menampilkan nomor versi, instalasi berhasil dan dapat dilanjutkan.

Jika muncul pesan `command not found` atau `is not recognized`, pastikan instalasi selesai, buka terminal baru, lalu coba kembali. Jika masih gagal, periksa konfigurasi PATH Windows.

### C. Instal Visual Studio Code

Jika belum tersedia:

1. Buka https://code.visualstudio.com/
2. Unduh installer untuk Windows.
3. Jalankan installer dan ikuti petunjuknya.

### D. Instal Ionic CLI

Setelah Node.js dan npm berhasil terinstal, jalankan:

```bash
npm install -g @ionic/cli
```

Periksa instalasi Ionic CLI:

```bash
ionic -v
```

Jika menampilkan nomor versi, Ionic CLI sudah siap digunakan.

### E. Siapkan Browser

Gunakan browser seperti Google Chrome atau Microsoft Edge untuk menguji aplikasi melalui alamat lokal yang ditampilkan saat menjalankan `ionic serve`.
