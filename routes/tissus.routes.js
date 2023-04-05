const express = require('express');
const router = express.Router();
const tissusController = require('../controllers/tissus.controller');

router.post('/tissu/add', tissusController.createTissus);
router.post('/tissu/update', tissusController.updateTissus);
router.get('/tissu/getAll', tissusController.getAllTissus);

module.exports = router;