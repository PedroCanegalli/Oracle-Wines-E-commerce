const fs = require('fs');
const path = require('path');

let usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

console.log(users)

const controller = {
	
	index: (req, res) => {

		res.render(path.resolve(__dirname,"../views/users/registro.ejs"))
	},

	store: (req, res) => {

		//Agregar el usuario nuevo al array

		let userNew = {
			idUser: Math.max(...users.map(e => e.idUser)) + 1,
			name: req.body.name,
            userName: req.body.userName,
			email: req.body.email,
			bday: req.body.bday,
			address: req.body.addres,
			invoice: req.body.invoice,
			interest: req.body.interest,
			picture: req.file.filename,
			password: req.body.password,

		}

		users.push(userNew);
		console.log(users)
		//Transformar en JSON

		usersDataBaseJSON = JSON.stringify(users, null, 4);

		//Sobreescribir el archivo

		fs.writeFileSync(path.resolve(__dirname, "../data/usersDataBase.json"), usersDataBaseJSON);

		//Redirección a la URL de Login
		res.redirect('/login');
	},


	  // Delete - Delete one product from DB
	  /*destroy : (req, res) => {
	  	
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
    }*/
	  
};


module.exports = controller;