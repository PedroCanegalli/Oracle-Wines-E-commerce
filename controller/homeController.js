let path = require("path")

let homeController ={
    home: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/home.ejs"))
    },
    carrito: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/carrito.ejs"))
    },
    catalogo: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/catalogo.ejs"))
    },
    historial: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/historial.ejs"))
    },
    login: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/login.ejs"))
    },
    productDetail: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/productDetail.ejs"))
    },
    recuperar: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/recuperar.ejs"))
    },
    registro: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/registro.ejs"))
    },
    administrador: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/administrador.ejs"))
    },
}

module.exports=homeController