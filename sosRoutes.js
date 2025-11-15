const express = require('express');
const router = express.Router();
const { sendSOS, getSOSList } = require('../controllers/sosController');

router.post('/send', sendSOS);
router.get('/list', getSOSList);

module.exports = router;
