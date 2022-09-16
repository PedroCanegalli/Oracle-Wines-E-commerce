const path = require("path");
const { body } = require("express-validator");
const { nextTick } = require("process");

module.exports = [

        body("name")
                .notEmpty()
                .withMessage("Tienes que escribir un nombre de producto").bail()
                .isLength({ min: 5 })
                .withMessage("Tú nombre debe tener minimo 5 caracteres"),
        body("description")
                .notEmpty()
                .withMessage("Tienes que escribir una descripción del producto").bail()
                .isLength({ min: 20 })
                .withMessage("La descripción de producto debe tener al menos 20 caracteres"),
        body("price")
                .notEmpty()
                .withMessage("Tienes que escribir un precio"),
        body("stock")
                .notEmpty()
                .withMessage("Detallar la cantidad de stock disponible"),
        body("discount")
                .notEmpty()
                .withMessage("Especificar porcentaje de descuento"),
        body("awards")
                .notEmpty()
                .withMessage("Tienes que completar la cantidad de premios que tiene"),
        body("image").custom((value, { req }) => {
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