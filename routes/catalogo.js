var express = require('express');
var router = express.Router();
let catalogoRouter = require("../controller/homeController")

router.get("/", catalogoRouter.catalogo)


module.exports = router;
