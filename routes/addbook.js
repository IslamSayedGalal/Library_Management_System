var express = require('express');
var router = express.Router();
const addbookc = require('../controller/addbookc')
    /* GET home page. */
router.get('/add-book', addbookc.add_product);
router.post('/add-book',addbookc.add_book)
router.get('/delete-book', addbookc.deletepage);
router.post('/delete',addbookc.deletebook)

// deletebook
module.exports = router;