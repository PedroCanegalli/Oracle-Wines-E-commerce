let express = require("express");
let path = require("path");
let app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use ( express.static(publicPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



var homeRouter = require('./routes/home');
var carritoRouter = require('./routes/carrito');
var catalogoRouter = require('./routes/catalogo');
var historialRouter = require('./routes/historial');
var loginRouter = require('./routes/login');
var productDetailRouter = require('./routes/productDetail');
var recuperarRouter = require('./routes/recuperar');
var registroRouter = require('./routes/registro');


app.use('/', homeRouter);
app.use('/carrito', carritoRouter);
app.use('/catalogo', catalogoRouter);
app.use('/historial', historialRouter);
app.use('/login', loginRouter);
app.use('/producto', productDetailRouter);
app.use('/recuperar', recuperarRouter);
app.use('/registro', registroRouter);




/*
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
*/
app.listen(3100,() => {
    console.log("wey esta madre si funciona")
})
