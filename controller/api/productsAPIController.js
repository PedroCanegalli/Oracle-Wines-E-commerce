const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { validationResult } = require("express-validator");
const productValidation = require('../../middlewares/productValidation');

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
    },'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/products/:id'
                    },
                    data: {
                        "user_id": product.product_id,
                        "name": product.name,
                        "price": product.price,
                        "discount": product.discount,
                        "stock": product.stock,
                        "category_id": product.category_id,
                        "awards": product.awards,
						"description": product.description,
						"extra_description": product.extra_description,
						"rate": product.rate,
                        "image": "http://localhost:3100/images/"+ product.image

                    }
                }
                res.json(respuesta);
        });
    }
}

module.exports = productsController;