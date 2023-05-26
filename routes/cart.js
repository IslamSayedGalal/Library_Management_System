var express = require('express');
var router = express.Router();
const cartc = require('../controller/cartc')
    /* GET home page. */
router.get('/cart/:id', cartc.show);
module.exports = router;