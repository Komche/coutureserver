const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller');

router.post('/client/add', clientController.createClient);
router.post('/client/update', clientController.updateClient);
router.get('/client/getAll', clientController.getAllClient);

module.exports = router;