# 3NIMBelakang_EnvORM

REST API CRUD **Komik** menggunakan **Express.js**, **Sequelize ORM**, dan **PostgreSQL**.

## Struktur Tabel `komik`

| Kolom       | Tipe                     |
|-------------|--------------------------|
| id          | INTEGER (PK, auto incr.) |
| title       | VARCHAR (wajib)          |
| description | TEXT                     |
| author      | VARCHAR (wajib)          |

## Cara Menjalankan

```bash
git clone https://github.com/<username>/3NIMBelakang_EnvORM.git
cd 3NIMBelakang_EnvORM
npm install
cp .env.example .env      # lalu isi password PostgreSQL
npm run db:create         # membuat database baru
npm start                 # tabel "komik" dibuat otomatis oleh Sequelize
```

## Endpoint

| Method | URL               | Keterangan             |
|--------|-------------------|------------------------|
| GET    | /api/komik        | Ambil semua komik      |
| GET    | /api/komik/:id    | Ambil komik berdasarkan id |
| POST   | /api/komik        | Tambah komik           |
| PUT    | /api/komik/:id    | Ubah komik             |
| DELETE | /api/komik/:id    | Hapus komik            |

Contoh body (POST / PUT):

```json
{
  "title": "One Piece",
  "description": "Petualangan Luffy mencari harta karun One Piece",
  "author": "Eiichiro Oda"
}
```

## Hasil Pengujian Postman

### GET
![GET](docs/screenshots/get.png)

### POST
![POST](docs/screenshots/post.png)

### PUT
![PUT](docs/screenshots/put.png)

### DELETE
![DELETE](docs/screenshots/delete.png)
