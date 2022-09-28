const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Users = db.User;
const Interests = db.Interest;
const Invoice = db.Invoice;
const UserCategories = db.UserCategory;

//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const userAPIController = {
    'list': (req, res) => {
        db.User.findAll()
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/actor/:id'
                    },
                    data: {
                        "user_id": user.user_id,
                        "name": user.name,
                        "userName": user.userName,
                        "email": user.email,
                        "bday": user.bday,
                        "invoice_id": user.invoice_id,
                        "interest_id": user.interest_id,
                        "picture": "http://localhost:3100/images/users/"+ user.picture

                    }
                }
                res.json(respuesta);
        });
    }
}   

module.exports = userAPIController;