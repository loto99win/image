const express = require('express');
const router = express.Router();

const storage = require('../helpers/profile');

const profileControllers = require('../controllers/profile');

router.get('/', profileControllers.getProfiles);
router.post('/', storage, profileControllers.postProfile);

module.exports = router;