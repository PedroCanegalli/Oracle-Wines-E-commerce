const express = require('express');
const router = express.Router();
const userAPIController = require('../../controller/api/userAPIController');

//Rutas
//Listado de todos los ususarios
router.get('/', userAPIController.list);

module.exports = router;