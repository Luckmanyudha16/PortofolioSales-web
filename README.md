# Pura Group & Pura Engineering Corporate Website

Website resmi korporat Pura Group & Divisi Rekayasa (INARI), dibangun menggunakan **Next.js 16, TypeScript, Tailwind CSS, Framer Motion, dan Lucide React** berbasis dokumen PDF resmi 2026.

---

## 1. Cara Menjalankan di Komputer Lokal

Penyebab error sebelumnya adalah karena terminal berada di folder luar (`Project ayah`), sedangkan file proyek Next.js berada di dalam subfolder **`pura-web`**.

### Langkah-langkah:

1. Buka Terminal / PowerShell.
2. Masuk ke dalam direktori `pura-web`:
   ```bash
   cd "d:\Antigravity IDE\Project ayah\pura-web"
   ```
3. Jalankan server pengembangan (Development Mode):
   ```bash
   npm run dev
   ```
   *Atau jika ingin menjalankan versi Production (cepat & optimal):*
   ```bash
   npm run build
   npm run start
   ```
4. Buka browser di alamat:
   ```
   http://localhost:3000
   ```

---

## 2. Cara Deploy ke Render (Render.com)

Aplikasi ini sudah siap untuk di-deploy ke **Render.com** sebagai **Web Service**.

### Langkah 1: Push Project ke GitHub
Pastikan source code proyek sudah di-push ke repository GitHub Anda (bisa public atau private).

### Langkah 2: Buat Web Service di Render
1. Login ke akun Anda di [dashboard.render.com](https://dashboard.render.com/).
2. Klik tombol **New +** di pojok kanan atas, lalu pilih **Web Service**.
3. Pilih opsi **Build and deploy from a Git repository**, lalu hubungkan dengan repository GitHub Anda.

### Langkah 3: Konfigurasi di Dashboard Render
Isi formulir konfigurasi dengan pengaturan berikut:

* **Name**: `bennyto-puragroup` *(Nama ini menentukan URL Anda: `https://bennyto-puragroup.onrender.com`)*
* **Region**: `Singapore` *(paling cepat untuk akses dari Indonesia)*
* **Branch**: `main` *(atau branch utama repo Anda)*
* **Root Directory**: `pura-web` *(Wajib diisi jika folder `pura-web` berada di dalam subfolder repository, atau kosongkan jika repo langsung di root `pura-web`)*
* **Runtime**: `Node`
* **Build Command**:
  ```bash
  npm install && npm run build
  ```
* **Start Command**:
  ```bash
  npm run start
  ```
* **Instance Type**: `Free`

### Langkah 4: Environment Variables
Di bagian **Advanced** -> **Environment Variables**, tambahkan:
* Key: `NODE_VERSION`, Value: `20`

### Langkah 5: Klik Deploy
Klik **Create Web Service**. Render akan otomatis memproses *build* dan aplikasi Anda akan langsung aktif di URL:
👉 **`https://bennyto-puragroup.onrender.com`**
