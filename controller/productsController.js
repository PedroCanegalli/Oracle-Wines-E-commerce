const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// console.log(products)
const controller = {
	//vista de todos los productos
	catalogo: (req, res) => {
		res.render(path.resolve(__dirname, "../views/products/catalogo.ejs"), { products })
	},

	// vista del detalle de cada producto
	detail: (req, res) => {

		let variableid = parseInt(req.params.id)
		let productEncontrado = products.find(element => element.id === variableid)
		//console.log(productEncontrado)


		res.render(path.resolve(__dirname, "../views/products/productDetail.ejs"), { productEncontrado })

	},

	// vista para crear producto por metodo GET
	create: (req, res) => {
		res.render("products/create-product")
	},

	// vista para creado de producto por metodo POST

	createProcess: (req, res) => {

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
		res.redirect("/products");
	},

	// Vista para el Edit del producto por metodo GET
	edit: (req, res) => {
		let variableid = parseInt(req.params.id)
		let productToEdit = products.find(element => element.id === variableid)
		//console.log(productToEdit)
		res.render(path.resolve(__dirname, "../views/products/edit-product.ejs"), { productToEdit })

	},

	// Vista para el proceso del Edit de producto por metodo PUT
		editProcess: (req, res) => {
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
		res.redirect(`/products/detail/${id}`)
		
	},
	
	  // Vista para eliminar un producto por metodo DELETE
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

        res.redirect("/products");
    },
	//vista del Carrito de compras
	carrito: (req,res)=> {
		res.render('products/carrito')
	}  
};


module.exports = controller;