var express = require('express');
var router = express.Router();
const yourbooks = require('../controller/yourbooks')
router.post('/addtocart', yourbooks.add);
router.get('/getCart', yourbooks.getcart);
router.post('/deletefromcart', yourbooks.deletefromcart);
module.exports = router;