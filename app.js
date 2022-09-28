let express = require("express");
let path = require("path");
let app = express();
const methodOverride= require("method-override")
const session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const cookies = require('cookie-parser');

const publicPath = path.resolve(__dirname, "./public");
app.use ( express.static(publicPath));

//Aquí llamo a la ruta de las api de user
const apiUsersRouter = require('./routes/api/user')

app.use (methodOverride("_method")) // configuracion para el metodo PUT y DELETE
//configuracion para el req.body
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//configuracion ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//Session
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
}));
//Cookies y Logged Middleware
app.use(cookies());
app.use(userLoggedMiddleware);
// rutas requeridas
let productsRouter = require("./routes/products.routes");
let usersRouter = require("./routes/users.routes");
let homeRouter = require("./routes/home.routes");
// uso de las rutas
app.use('/', homeRouter);
app.use("/products",productsRouter);
app.use("/users",usersRouter);



//Aquí creo la colección de mis recursos de movies (APIs)
app.use('/api/users', apiUsersRouter);


//servidor
app.listen(3100,() => {
    console.log("wey esta madre si funciona en el puerto 3100")
})
