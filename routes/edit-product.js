var express = require('express');
var router = express.Router();
let editRouter = require("../controller/productsController")
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, path.join(__dirname,"../../public/images/products"))
    },
    filename: (req,file,cb)=>{
        //console.log(file)
        const newFilename = "this" + Date.now() + path.extname(file.originalname);
        cb(null, newFilename)
    }
}) 
const upload = multer({storage});


//router.get('/', productDetailRouter.edit)
router.get('/:id', editRouter.edit);
router.put('/edit/:id', upload.single("thisimage"), editRouter.update)

module.exports = router;
