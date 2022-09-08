var express = require('express');
var router = express.Router();
const path = require('path');
//CONTROLLER
let userRouter = require("../controller/userController")
let userRouter2 = require("../controller/userController2")

     //REQUIRE MIDDLEWARES
const { body } = require("express-validator");
const guestMiddlewares = require("../middlewares/guestMiddleware");
const outMiddlewares = require("../middlewares/outMiddleware");
const validation =  require("../middlewares/registerValidation")
const upload = require("../middlewares/multerUsers")





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
router.get("/edit/:id", userRouter2.userEdit)
router.put("/edit/:id", upload.single("image"), userRouter2.editProcess)

// logout de un usuario
router.get('/logout', userRouter2.logout);
module.exports = router;
