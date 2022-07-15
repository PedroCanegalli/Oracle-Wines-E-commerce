const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// Root - Show all products
	index: (req, res) => {

		res.render(path.resolve(__dirname, "../views/products/catalogo.ejs"), { products })
	},

	// Detail - Detail from one product
	detail: (req, res) => {

		let variableid = parseInt(req.params.id)
		let productEncontrado = products.find(element => element.id === variableid)
		//console.log(productEncontrado)


		res.render(path.resolve(__dirname, "../views/products/productDetail.ejs"), { productEncontrado })

	},

	// Create - Get form to create
	create: (req, res) => {

		res.render(path.resolve(__dirname, "../views/users/administrador.ejs"))
	},

	// Create - Post form to create

	store: (req, res) => {

		//Agregar el producto nuevo al array

		let productNew = {
			id: Math.max(...products.map(e => e.id)) + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			descripcionExtra: req.body.descripcionExtra,
			rate: req.body.rate,
			image: req.file.filename,

		}

		products.push(productNew);
		console.log(products)
		//Transformar en JSON

		productsDataBaseJSON = JSON.stringify(products, null, 4);

		//Sobreescribir el archivo

		fs.writeFileSync(path.resolve(__dirname, "../data/productsDataBase.json"), productsDataBaseJSON);

		//Redirección a la URL de Productos
		res.redirect((`/producto/`+ productNew.id));
	},

	// Update - Form to edit
	edit: (req, res) => {
		let variableid = parseInt(req.params.id)
		let productToEdit = products.find(element => element.id === variableid)
		//console.log(productToEdit)
		res.render(path.resolve(__dirname, "../views/products/edit-product.ejs"), { productToEdit })

	},

	// Update - Method to update
	update: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let id = req.params.id;  
		products.forEach(product => {
			if (product.id == id) {
				product.name = req.body.name,
					product.price = req.body.price,
					product.discount = req.body.discount,
					product.category = req.body.category,
					product.image = req.file == undefined ? product.image : req.file.filename,
					product.description = req.body.description
			}
		})

		let productJson = JSON.stringify(products, null, 2);
		fs.writeFileSync(productsFilePath, productJson, "utf-8")
		console.log(productJson) 
		res.redirect(`/producto/${id}`)
		
	},
	
	  // Delete - Delete one product from DB
	  destroy : (req, res) => {
	  	
		const productId = parseInt(req.params.id, 10);

        for (let i = 0; i < products.length; i++) {
            if ( products[i].id === productId ) {
                products.splice(i, 1)
            }
        }

		productsDataBaseJSON = JSON.stringify(products, null, 4);

		//Sobreescribir el archivo

		fs.writeFileSync(path.resolve(__dirname, "../data/productsDataBase.json"), productsDataBaseJSON);

        res.redirect("/catalogo");
    }
	  
};


module.exports = controller;