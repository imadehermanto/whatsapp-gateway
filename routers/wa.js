const express = require('express');
const api = require('../controllers/waController');
const router = express.Router();

router.get('/api', api);
router.post('/api', api);


module.exports = router;