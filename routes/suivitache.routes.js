const express = require('express');
const router = express.Router();
const suivitacheController = require('../controllers/suivitache.controller');

router.post('/suivitache/add', suivitacheController.createSuivitache);
router.post('/suivitache/update', suivitacheController.updateSuivitache);
router.get('/suivitache/getAll', suivitacheController.getAllSuivitache);

module.exports = router;