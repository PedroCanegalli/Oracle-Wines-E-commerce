var express = require('express');
var router = express.Router();
let loginRouter = require("../controller/homeController")

router.get("/", loginRouter.login)


module.exports = router;
