// Membuat database PostgreSQL baru (jika belum ada).
// Sequelize tidak bisa membuat database, jadi kita konek ke database default "postgres".
require('dotenv').config();
const { Client } = require('pg');

(async () => {
  const dbName = process.env.DB_NAME;
  const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres',
  });

  try {
    await client.connect();
    const { rowCount } = await client.query(
      'SELECT 1 FROM pg_database WHERE datname = $1',
      [dbName]
    );
    if (rowCount === 0) {
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database "${dbName}" berhasil dibuat.`);
    } else {
      console.log(`Database "${dbName}" sudah ada.`);
    }
  } catch (err) {
    console.error('Gagal membuat database:', err.message);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
})();
