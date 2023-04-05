const express = require('express');
const router = express.Router();
const tacheController = require('../controllers/tache.controller');

router.post('/tache/add', tacheController.createTache);
router.post('/tache/update', tacheController.updateTache);
router.get('/tache/getAll', tacheController.getAllTache);

module.exports = router;