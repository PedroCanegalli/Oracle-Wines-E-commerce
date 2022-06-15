let express = require("express");
let path = require("path");
let app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use ( express.static(publicPath));

app.listen(3100,() => {
    console.log("wey esta madre si funciona")
})

app.get("/registro", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/registro.html"))
})

app.get("/carrito", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/carrito.html"))
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
