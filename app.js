let express = require("express");
let path = require("path");
let app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use ( express.static(publicPath));

app.set('view engine', 'ejs');


app.get("/", (req,res)=> {
    res.render(path.resolve(__dirname,"./views/home.ejs"))
})

app.get("/registro", (req,res)=> {
    res.render(path.resolve(__dirname,"./views/registro.ejs"))
})

app.get("/carrito", (req,res)=> {
    res.render(path.resolve(__dirname,"./views/carrito.ejs"))
})

app.get("/producto", (req,res)=> {
    res.render(path.resolve(__dirname,"./views/productDetail.ejs"))
})

app.get("/login", (req,res)=> {
    res.render(path.resolve(__dirname,"./views/login.ejs"))
})

app.get("/recuperar", (req,res)=> {
    res.render(path.resolve(__dirname,"./views/recuperar.ejs"))
})

app.get("/historial", (req,res)=> {
    res.render(path.resolve(__dirname,"./views/historial.ejs"))
})

app.listen(3100,() => {
    console.log("wey esta madre si funciona")
})
