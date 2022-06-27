var express = require('express');
var router = express.Router();
let registroRouter = require("../controller/homeController")

router.get("/", registroRouter.registro)


module.exports = router;
