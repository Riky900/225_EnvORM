const { Komik } = require('../models');

// GET /api/komik
module.exports = async (req, res) => {
  try {
    const data = await Komik.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ message: 'Berhasil mengambil semua data komik', data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
