const express = require('express');
const router = express.Router();

const getAllKomik = require('../controllers/getAllKomik');
const getKomikById = require('../controllers/getKomikById');
const createKomik = require('../controllers/createKomik');
const updateKomik = require('../controllers/updateKomik');
const deleteKomik = require('../controllers/deleteKomik');

router.get('/', getAllKomik);
router.get('/:id', getKomikById);
router.post('/', createKomik);
router.put('/:id', updateKomik);
router.delete('/:id', deleteKomik);

module.exports = router;
