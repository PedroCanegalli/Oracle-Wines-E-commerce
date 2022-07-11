var express = require('express');
var router = express.Router();
let productDetailRouter = require("../controller/productsController")

router.get("/", productDetailRouter.detail)

router.get('/:id/', productDetailRouter.detail); 
router.get('/detail/:id', productDetailRouter.detail);



module.exports = router;
