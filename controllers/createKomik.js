const { Komik } = require('../models');

// POST /api/komik
module.exports = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    if (!title || !author) {
      return res.status(400).json({ message: 'title dan author wajib diisi' });
    }
    const komik = await Komik.create({ title, description, author });
    res.status(201).json({ message: 'Komik berhasil ditambahkan', data: komik });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
