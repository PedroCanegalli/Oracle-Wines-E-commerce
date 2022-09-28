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
				db.Product.findAll(
					{
						include: ['category'],
						where: {
							category_id: 1
						}
					}

				).then(
					category1 => {
					db.Product.findAll(
					{
						include: ['category'],
							where: {
								category_id: 2
								}
							}).then(
						category2 =>{
							db.Product.findAll(
								{
									include: ['category'],
										where: {
											category_id: 3
											}
										}).then(category3 =>{
											let respuesta = {
												meta: {
													status: 200,
													count: products.length,
													countByCategory: {
														andino: category1.length,
														patagonicos: category2.length,
														importados: category3.length,
														},
													url: 'api/products'
												},
												data: products
											}
											res.json(respuesta);
										})					

						}
					)

				}
			)

		})
    }
}

module.exports = productsController;