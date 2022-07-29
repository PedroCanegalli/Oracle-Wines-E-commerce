const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator")
let usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcryptjs = require("bcryptjs");
const usersModel = require('../models/user');

const controller = {
	//vista del registro por metodo GET
	register: (req, res) => {
		res.render(path.resolve(__dirname, "../views/users/registro.ejs"))
	},
	// vista del registro para crear usuario por metodo POST
	registerProcess: (req, res) => {
		let resultValidation = validationResult(req)
		// if para encontrar el error 
		if (resultValidation.errors.length > 0) {

			res.render("users/registro", {
				errors: resultValidation.mapped(),
				oldData: req.body

			})
		} 
		let userEmail = usersModel.findByField('email', req.body.email);

		if(userEmail){
			
			return res.render("users/registro", {
				errors: {
					email: {
						msg: "Este usuario ya esta registrado"
					}
				},
				oldData: req.body

			})
		}
		
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
				password: bcryptjs.hashSync(req.body.password, 10)

			}
			//console.log(userNew)
				users.push(userNew)
			//Transformar en JSON
				usersDataBaseJSON = JSON.stringify(users, null, 4);
			//Sobreescribir el archivo
				fs.writeFileSync(path.resolve(__dirname, "../data/usersDataBase.json"), usersDataBaseJSON);
			
			//Redirección a la URL de Login
			res.redirect('/users/login' );
		
	},
	//vista del historial de compras
	historial: (req, res) => {
		res.render(path.resolve(__dirname, "../views/users/historial.ejs"))
	},
	//vista del login
	login: (req, res) => {
		res.render(path.resolve(__dirname, "../views/users/login.ejs"))
	},
	//vista del proceso del login
	loginProcess: (req,res)=> {
        
        //Verificación de email
        let userToLogin = usersModel.findByField('email', req.body.email);

        if(userToLogin) {

            //Verificación de password
            let passwordOK = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(passwordOK){
                delete userToLogin.password;
                req.session.userLogged = userToLogin

				if(req.body.remember_user){
					res.cookie('userEmail', req.body.email, {maxAge: 1000*60*30});
				}

                return res.redirect("user");
            }
			//console.log(req.session)
            //Mensaje de error ante password incorrecto
            return res.render(path.resolve(__dirname,"../views/users/login.ejs"), {
                errors : 
                    {
                        email: {
                            msg: 'Las credenciales son invalidas'
                        }
                    },
                oldData: req.body
            });
        }

        //Mensaje de error ante email no encontrado
        return res.render(path.resolve(__dirname,"../views/users/login.ejs"), {
            errors : 
                {
                    email: {
                        msg: 'Email no registrado'
                    }
                },
            oldData: req.body
        });
    },
	//vista para recuperar contraseña
	recuperar: (req, res) => {
		res.render(path.resolve(__dirname, "../views/users/recuperar.ejs"))
	},

	show: (req, res) => {
        
        res.render('users/user', {user: req.session.userLogged});

    },

	logout: (req,res)=>{
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect("/");
	}

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