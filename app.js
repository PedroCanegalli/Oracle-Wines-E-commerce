let express = require("express");
let path = require("path");
let app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use ( express.static(publicPath));

app.set('view engine', 'ejs');


app.get("/", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get("/registro", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/registro.html"))
})

app.get("/carrito", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/carrito.html"))
})

app.get("/carrito2", (req,res)=> {
    res.render(path.resolve(__dirname,"./views/carrito copy.ejs"))
})

app.get("/producto", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/productDetail.html"))
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/recuperar', (req,res)=>{
    res.sendFile(__dirname + '/views/recuperar.html');
});

app.get('/historial', (req,res)=>{
    res.sendFile(__dirname + '/views/historial.html');
});

app.listen(3100,() => {
    console.log("wey esta madre si funciona")
})
