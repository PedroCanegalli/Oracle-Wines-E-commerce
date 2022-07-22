let express = require("express");
let path = require("path");
let app = express();
const methodOverride= require("method-override")

const publicPath = path.resolve(__dirname, "./public");
app.use ( express.static(publicPath));
app.use (methodOverride("_method")) // configuracion para el metodo PUT y DELETE
//configuracion para el req.body
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//configuracion ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// rutas requeridas
let productsRouter = require("./routes/products.routes");
let usersRouter = require("./routes/users.routes");
let homeRouter = require("./routes/home.routes");
// uso de las rutas
app.use('/', homeRouter);
app.use("/products",productsRouter);
app.use("/users",usersRouter);



//servidor
app.listen(3100,() => {
    console.log("wey esta madre si funciona")
})
