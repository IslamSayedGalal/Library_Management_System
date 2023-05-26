var express = require('express');
var router = express.Router();
const loginc = require('../controller/loginc')
    /* GET home page. */
router.get('/', loginc.show);
router.post('/getUserData', loginc.getUserData);
router.post('/checkUserSigning', loginc.checkUserSigning);

module.exports = router;