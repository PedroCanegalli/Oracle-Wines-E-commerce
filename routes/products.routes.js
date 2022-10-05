var express = require('express');
var router = express.Router();
let productsController = require("../controller/productsController");
let multer = require('multer');
let path = require('path');
const validation =  require("../middlewares/productValidation")

//Configuración de Multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage })

//vista de productos
router.get("/", productsController.list)
// vista detalle del producto
router.get("/detail/:id", productsController.detail)
//vista del creado de producto
router.get("/create", productsController.add)
router.post("/create", upload.single("image"), validation, productsController.create)
//vista del editado de producto
router.get("/edit/:id", productsController.edit)
router.put("/edit/:id", upload.single("image"), validation, productsController.update)
//vista del eliminado de producto
router.delete("/delete/:id", productsController.destroy)
// vista del carrito de compras
router.get("/cart", productsController.carrito)
// buscar producto
router.post("/buscar/detail", productsController.buscar)
//Vistas por categoría
router.get("/andinos", productsController.andinos)
router.get("/patagonicos", productsController.patagonicos)
router.get("/importados", productsController.importados)
//Vista vinos especiales
router.get("/premiados", productsController.premiados)
router.get("/recomendados", productsController.recomendados)
router.get("/ofertas", productsController.ofertas)

module.exports = router;
