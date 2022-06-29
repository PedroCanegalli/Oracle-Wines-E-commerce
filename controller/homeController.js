let path = require("path")

let homeController ={
    home: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/products/home.ejs"))
    },
    carrito: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/products/carrito.ejs"))
    },
    catalogo: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/products/catalogo.ejs"))
    },
    historial: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/users/historial.ejs"))
    },
    login: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/users/login.ejs"))
    },
    productDetail: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/products/productDetail.ejs"))
    },
    recuperar: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/users/recuperar.ejs"))
    },
    registro: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/users/registro.ejs"))
    },
    administrador: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/users/administrador.ejs"))
    },
}

module.exports=homeController