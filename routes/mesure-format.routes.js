const express = require('express');
const router = express.Router();
const mesureFormatController = require('../controllers/mesure-format.controller');

router.post('/mesureFormat/add', mesureFormatController.createMesureFormat);
router.post('/mesureFormat/update', mesureFormatController.updateMesureFormat);
router.get('/mesureFormat/getAll', mesureFormatController.getAllMesureFormat);

module.exports = router;