var express = require('express');
var router = express.Router();
let homeController = require("../controller/homeController")

router.get("/", homeController.home)
router.get("/prueba", homeController.home2)

module.exports = router;
