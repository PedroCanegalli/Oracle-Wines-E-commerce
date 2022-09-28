const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { validationResult } = require("express-validator");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Products = db.Product;
const Categories = db.Category;
const Users = db.User;

const productsController = { 
    'list': (req, res) => {
				db.Product.findAll({
					include: ['category']
				})
				.then(products => {
					let respuesta = {
						meta: {
							status : 200,
							count: products.length,
							url: 'api/products'
						},
						data: products
					}
						res.json(respuesta);
					})
    }
}

module.exports = productsController;