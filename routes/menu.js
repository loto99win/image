const menuControllers = require('../controllers/menu');
const express = require('express');
const router = express.Router();

// add menu
router.post('/add', menuControllers.addMenu);

// get all menu
router.get('/all', menuControllers.getMenu);

module.exports = router;