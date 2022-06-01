let express = require("express");
let path = require("path");
let app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use ( express.static(publicPath));

app.listen(3100,() => {
    console.log("wey esta madre si funciona")
})

app.get("/", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"./views/formulario-registro.html"))
})



