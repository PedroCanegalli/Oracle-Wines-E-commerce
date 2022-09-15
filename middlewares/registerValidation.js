const path = require("path");
const { body } = require("express-validator");
const { nextTick } = require("process");

module.exports = [

        body("name")
                .notEmpty()
                .withMessage("Tienes que escribir un nombre").bail()
                .isLength({ min: 2 })
                .withMessage("Tú nombre debe tener minimo 2 caracteres"),
        body("userName")
                .notEmpty()
                .withMessage("Tienes que escribir un apellido"),
        body("email")
                .notEmpty()
                .withMessage("Tienes que escribir un email"),
        body("textDirection")
                .notEmpty()
                .withMessage("Tienes que escribir una direccion"),
        body("password")
                .notEmpty()
                .withMessage("Tienes que escribir una password"),
        body("repassword")
                .notEmpty()
                .withMessage("Tiene que coincidir la repassword")
                .isLength({ min: 8 })
                .withMessage("Debe contener al menos 8 caracteres")
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,)
                .withMessage("debe contener numero, letra mayuscula, minuscula y un caracter especial"),
        body("picture").custom((value, { req }) => {
                let file = req.file;
                let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

                if (!file) {
                        throw new Error("subir una imagen",
                                `las extensiones permitidas son ${acceptedExtensions.join(',')}`
                        )
                } else {
                        let fileExtension = path.extname(file.originalname)
                        console.log(fileExtension)
                        if (acceptedExtensions.includes(fileExtension)) {
                               return true
                        }
                }
                
        })
]