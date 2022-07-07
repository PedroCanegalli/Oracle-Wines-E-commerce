var express = require('express');
var router = express.Router();
let catalogoRouter = require("../controller/productsController")

router.get("/", catalogoRouter.index)


module.exports = router;
