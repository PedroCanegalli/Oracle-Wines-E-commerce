var express = require('express');
var router = express.Router();
let administradorRouter = require("../controller/homeController")

router.get("/", administradorRouter.administrador)


module.exports = router;