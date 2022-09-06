var express = require('express');
var router = express.Router();
let userRouter = require("../controller/userController")
let userRouter2 = require("../controller/userController2")
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
router.get('/register', guestMiddlewares,userRouter2.register);
router.post("/register", upload.single('picture'), validation, userRouter2.registerProcess);
// vista de historial
router.get('/record', userRouter2.historial);
// vista de formulario de login
router.get('/login', guestMiddlewares, userRouter2.login);
router.post('/login', userRouter2.loginProcess);
// vista de recuperar contraseña
router.get('/recover', userRouter2.recuperar);

// Detalle de un usuario
router.get('/user', outMiddlewares, userRouter2.show);

//vista del editado del Usuario
router.get("/edit/:id", userRouter2.userEdit);
router.put("/edit/:id", upload.single("picture"), userRouter2.editProcess);

// logout de un usuario
router.get('/logout', userRouter2.logout);
module.exports = router;
