var express = require('express');
var router = express.Router();
const mainpageC = require('../controller/mainPage')
router.get('/mainPage', mainpageC.show);

module.exports = router;