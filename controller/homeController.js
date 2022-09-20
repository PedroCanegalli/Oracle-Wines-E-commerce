const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const Products = db.Product;
const Categories = db.Category;

let homeController = {
	home: (req, res) => {
        db.Product.findAll({
            include: ['category'],
            where: {
                awards: {[db.Sequelize.Op.gt] : 0}
            },
            order: [
                ['awards', 'DESC']
            ]
        })
            .then(winnerProducts => {
                res.render(path.resolve(__dirname, "../views/home.ejs"), {winnerProducts});
            });
    },
}

module.exports = homeController