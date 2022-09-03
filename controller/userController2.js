const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Users = db.User;
const Interests = db.Interest;
const Invoice = db.Invoice;
const UserCategories = db.UserCategory;

const userController = { 
    show: (req, res) => {
        
        res.render('users/user', {user: req.session.userLogged});

    },
    register: function (req, res) {
        let promInterest = Interests.findAll();
        let promInvoice = Invoice.findAll();
        Promise
        .all([promInterest, promInvoice])
        .then(([userInterest, userInvoice]) => {
           return res.render(path.resolve(__dirname, "../views/users/registro.ejs"), {userInterest,userInvoice})})
        .catch(error => res.send(error))
    },
    registerProcess: function (req,res) {
        Users
        .create(
            {
				name: req.body.name,
				userName: req.body.userName,
				email: req.body.email,
				bday: req.body.bday,
				address: req.body.addres,
				invoice_id: req.body.invoice_id,
				interest_id: req.body.interest_id,
				picture: req.file.filename,
				password: bcryptjs.hashSync(req.body.password, 10),
                userCategory_id: 2
            }
        )
        .then(()=> {
            return res.redirect('/users/login')})            
        .catch(error => res.send(error))
    },

    edit: function(req,res) {
        let productId = req.params.id;
        let promProducts = Products.findByPk(productId,{include: ['category']});
        let promCategories = Categories.findAll();
        Promise
        .all([promProducts, promCategories])
        .then(([productToEdit, categories]) => {
           return res.render(path.resolve(__dirname, "../views/products/edit-product.ejs"), {productToEdit,categories})})
        .catch(error => res.send(error))
    },
    update: function (req,res) {
        let productId = req.params.id;
        Products
        .update(
            {
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                discount: req.body.discout,
                category_id: req.body.category,
                awards: req.body.awards,
                description: req.body.description,
				extra_description: req.body.extra_description,
				rate: req.body.rate,
				image: req.file.filename
            },
            {
                where: {product_id: productId}
            })
        .then(()=> {
            return res.redirect('/products')})            
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let productId = req.params.id;
        Products
        .destroy({where: {product_id: productId}, force: true})
        .then(()=>{
            return res.redirect('/products')})
        .catch(error => res.send(error)) 
    },
    	//vista del Carrito de compras
	carrito: (req,res)=> {
		res.render('products/carrito')
	}
}

module.exports = userController;