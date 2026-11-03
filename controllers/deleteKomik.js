const { Komik } = require('../models');

// DELETE /api/komik/:id
module.exports = async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);
    if (!komik) {
      return res.status(404).json({ message: 'Komik tidak ditemukan' });
    }
    await komik.destroy();
    res.status(200).json({ message: 'Komik berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
