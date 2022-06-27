var express = require('express');
var router = express.Router();
let historialRouter = require("../controller/homeController")

router.get("/", historialRouter.historial)


module.exports = router;
