var express = require('express');
var router = express.Router();
const contact = require('../controller/contactc')
router.get('/contact', contact.show);

module.exports = router;