const express = require('express');
const router = express.Router();
const modeleController = require('../controllers/modele.controller');

router.post('/modele/add', modeleController.createModele);
router.post('/modele/update', modeleController.updateModele);
router.get('/modele/getAll', modeleController.getAllModele);

module.exports = router;