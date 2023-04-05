const express = require('express');
const router = express.Router();
const paiementController = require('../controllers/paiement.controller');

router.post('/paiement/add', paiementController.createPaiement);
router.post('/paiement/update', paiementController.updatePaiement);
router.get('/paiement/getAll', paiementController.getAllPaiement);

module.exports = router;