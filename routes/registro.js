var express = require('express');
var router = express.Router();
let userRouter = require("../controller/userController")
const multer = require ('multer');
const path = require ('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/users'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })

router.get("/", userRouter.index)

router.post("/", upload.single('picture'), userRouter.store)

module.exports = router;
