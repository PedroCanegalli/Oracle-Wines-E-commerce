let path = require("path")

let homeController = {
    home: (req, res) => {
        res.render(path.resolve(__dirname, "../views/home.ejs"))
    }
}

module.exports = homeController