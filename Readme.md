# API Users

REST API sederhana untuk manajemen data user menggunakan Node.js, Express, dan Prisma ORM dengan database MySQL.

## Fitur

- CRUD user (Create, Read, Update, Delete)
- Menggunakan Prisma ORM
- Database MySQL

## Prasyarat

- Node.js & npm
- MySQL

## Cara Menjalankan

1. **Clone repository**
   ```bash
   git clone https://github.com/ardy1110/crud-api.git
   cd api-users
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Konfigurasi environment**
   - Salin file `.env.example` (jika ada) menjadi `.env` atau buat file `.env` baru.
   - Isi variabel `DATABASE_URL` sesuai koneksi MySQL Anda, contoh:
     ```
     DATABASE_URL="mysql://user:password@localhost:3306/nama_database"
     ```

4. **Migrasi database**
   ```bash
   npx prisma migrate deploy
   ```
   Atau, jika pertama kali setup:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Jalankan server**
   ```bash
   node server.js
   ```
   Atau jika menggunakan nodemon:
   ```bash
   npx nodemon server.js
   ```

6. **Akses API**
   - Server berjalan di `http://localhost:3000/api/user`.
   - Endpoint tersedia di `routes/userRoutes.js`.

## Struktur Folder

```
api-users/
├── controllers/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── routes/
├── .env
├── package.json
└── server.js
```

## Lisensi

MIT