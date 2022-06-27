var express = require('express');
var router = express.Router();
let carritoRouter = require("../controller/homeController")

router.get("/", carritoRouter.carrito)


module.exports = router;
