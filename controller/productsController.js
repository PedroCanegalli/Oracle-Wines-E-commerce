const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// Root - Show all products
	index: (req, res) => {
		
		res.render(path.resolve(__dirname,"../views/products/catalogo.ejs"),{products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let variableid = parseInt(req.params.id)
		let productEncontrado = products.find(element => element.id === variableid)
		//console.log(productEncontrado)


		res.render(path.resolve(__dirname,"../views/products/productDetail.ejs"),{productEncontrado})
		
	}

	// Create - Form to create
	/*create: (req, res) => {
		
		res.send("i'm here")
		//res.render(path.resolve(__dirname,"../views/product-create-form.ejs"))
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		let variableid = parseInt(req.params.id)
		let productToEdit = products.find(element => element.id === variableid)
		//console.log(productToEdit)
	    res.render(path.resolve(__dirname,"../views/product-edit-form.ejs"),{productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		res.send("Producto Actualizado")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		
		res.send("El Producto fue eliminado")
	}
*/	
};

module.exports = controller;