var express = require('express');
var router = express.Router();
let catalogoRouter2 = require("../controller/productController")

router.get("/", catalogoRouter2.index)


module.exports = router;
