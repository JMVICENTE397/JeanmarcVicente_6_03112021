const express = require('express');
const router = express.Router();
const validatePassword = require('../middleware/password-validator-config');
const limiter = require('../middleware/limiter-config');
const userCtrl = require('../controllers/user');

router.post('/signup', validatePassword, userCtrl.signup);
router.post('/login', limiter.max, userCtrl.login);

module.exports = router;