const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commande.controller');

router.post('/commande/add', commandeController.createCommande);
router.post('/commande/update', commandeController.updateCommande);
router.post('/commande/validate', commandeController.validateCommande);
router.get('/commande/getAll', commandeController.getAllCommande);
router.get('/commande/countCommade', commandeController.countCommade);

module.exports = router;