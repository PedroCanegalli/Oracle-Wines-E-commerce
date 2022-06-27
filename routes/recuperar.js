var express = require('express');
var router = express.Router();
let recuperarRouter = require("../controller/homeController")

router.get("/", recuperarRouter.recuperar)


module.exports = router;
