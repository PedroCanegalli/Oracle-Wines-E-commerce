const path = require("path");
const { body } = require("express-validator");
const { nextTick } = require("process");

module.exports = [

        
        body("email")
                .notEmpty()
                .withMessage("Tienes que escribir un email")
                .isEmail().withMessage("El formato de mail no es correcto"),
        body("password")
                .notEmpty()
                .withMessage("Tienes que escribir una password"),
        
]