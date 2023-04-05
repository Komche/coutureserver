const express = require('express');
const router = express.Router();
const employeController = require('../controllers/employe.controller');

router.post('/employe/add', employeController.createEmploye);
router.post('/employe/update', employeController.updateEmploye);
router.get('/employe/getAll', employeController.getAllEmploye);

module.exports = router;