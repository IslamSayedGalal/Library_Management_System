var express = require('express');
var router = express.Router();
const booksdetails = require('../controller/books-detailsC')
    /* GET home page. */
router.get('/books-details', booksdetails.show);

module.exports = router;