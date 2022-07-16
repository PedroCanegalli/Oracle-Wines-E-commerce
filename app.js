let express = require("express");
let path = require("path");
let app = express();
const methodOverride= require("method-override")

const publicPath = path.resolve(__dirname, "./public");
app.use ( express.static(publicPath));
app.use (methodOverride("_method"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

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
var administradorRouter = require('./routes/administrador');
var editProduct = require('./routes/edit-product')


app.use('/', homeRouter);
app.use('/carrito', carritoRouter);
app.use('/catalogo', catalogoRouter);
app.use('/historial', historialRouter);
app.use('/login', loginRouter);
app.use('/producto', productDetailRouter);
app.use('/recuperar', recuperarRouter);
app.use('/registro', registroRouter);
app.use('/administrador', administradorRouter);
app.use('/edit-product', editProduct)


app.listen(3100,() => {
    console.log("wey esta madre si funciona")
})
