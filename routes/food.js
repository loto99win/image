const express = require('express');
const router = express.Router();

const storage = require('../helpers/profile');

const foodControllers = require('../controllers/food');

router.get('/', foodControllers.getFoods);
router.post('/', storage, foodControllers.addFood);

module.exports = router;