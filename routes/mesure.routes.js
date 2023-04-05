const express = require('express');
const router = express.Router();
const mesureController = require('../controllers/mesure.controller');

router.post('/mesure/add', mesureController.createMesure);
router.post('/mesure/update', mesureController.updateMesure);
router.get('/mesure/getAll', mesureController.getAllMesure);

module.exports = router;