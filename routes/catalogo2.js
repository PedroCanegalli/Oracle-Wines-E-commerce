var express = require('express');
var router = express.Router();
let catalogoRouter2 = require("../controller/productsController")

router.get("/", catalogoRouter2.index)


module.exports = router;
