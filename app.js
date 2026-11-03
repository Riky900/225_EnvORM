require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const komikRoutes = require('./routes/komikRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Komik - Express.js + Sequelize + PostgreSQL' });
});

app.use('/api/komik', komikRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // membuat tabel "komik" jika belum ada
    console.log('Koneksi database berhasil, tabel "komik" siap.');
    app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
  } catch (err) {
    console.error('Gagal konek ke database:', err.message);
    process.exit(1);
  }
})();
