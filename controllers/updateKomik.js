const { Komik } = require('../models');

// PUT /api/komik/:id
module.exports = async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);
    if (!komik) {
      return res.status(404).json({ message: 'Komik tidak ditemukan' });
    }
    const { title, description, author } = req.body;
    await komik.update({ title, description, author });
    res.status(200).json({ message: 'Komik berhasil diperbarui', data: komik });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
