const { Komik } = require('../models');

// GET /api/komik/:id
module.exports = async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);
    if (!komik) {
      return res.status(404).json({ message: 'Komik tidak ditemukan' });
    }
    res.status(200).json({ message: 'Berhasil mengambil data komik', data: komik });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
