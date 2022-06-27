var express = require('express');
var router = express.Router();
let productDetailRouter = require("../controller/homeController")

router.get("/", productDetailRouter.productDetail)


module.exports = router;
