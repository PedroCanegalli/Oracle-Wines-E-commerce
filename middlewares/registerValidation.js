const path = require("path");
const { body } = require("express-validator")

module.exports = [
    
        body("name").notEmpty().withMessage("Tienes que escribir un nombre").isLength({min: 2}),
        body("userName").notEmpty().withMessage("Tienes que escribir un apellido"),
        body("email").notEmpty().withMessage("Tienes que escribir un email"),
        body("textDirection").notEmpty().withMessage("Tienes que escribir una direccion"),
        body("password").notEmpty().withMessage("Tienes que escribir una repassword"),
        body("repassword").notEmpty().withMessage("Tiene que coincidir la repassword")
    
    
]