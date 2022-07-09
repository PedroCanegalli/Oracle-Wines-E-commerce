var express = require('express');
var router = express.Router();
let administradorRouter = require("../controller/productsController")
const multer = require('multer');
const path = require('path');

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

//Rutas del administrador

router.get("/", administradorRouter.create);
router.post('/', upload.single("image"), administradorRouter.store); 



module.exports = router;