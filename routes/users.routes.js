var express = require('express');
var router = express.Router();
let userRouter = require("../controller/userController")
const multer = require('multer');
const path = require('path');
const { body } = require("express-validator");
const guestMiddlewares = require("../middlewares/guestMiddleware");
const outMiddlewares = require("../middlewares/outMiddleware");


//configuracion del multer

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/users'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

//configuracion de las validaciones

const validation = [
    body("name").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("userName").notEmpty().withMessage("Tienes que escribir un apellido"),
    body("email").notEmpty().withMessage("Tienes que escribir un email"),
    body("textDirection").notEmpty().withMessage("Tienes que escribir una direccion"),
    body("password").notEmpty().withMessage("Tienes que escribir una repassword"),
    body("repassword").notEmpty().withMessage("Tiene que coincidir la repassword")
]


// vista de formulario de registro
router.get('/register', guestMiddlewares,userRouter.register);
router.post("/register", upload.single('picture'), validation, userRouter.registerProcess);
// vista de historial
router.get('/record', userRouter.historial);
// vista de formulario de login
router.get('/login', guestMiddlewares, userRouter.login);
router.post('/login', userRouter.loginProcess);
// vista de recuperar contraseña
router.get('/recover', userRouter.recuperar);

// Detalle de un usuario
router.get('/user', outMiddlewares, userRouter.show);

// logout de un usuario
router.get('/logout', userRouter.logout);
module.exports = router;
