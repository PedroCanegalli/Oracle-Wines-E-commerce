const express = require('express');
const router = express.Router();
const userAPIController = require('../../controller/api/userAPIController');

//Rutas
//Listado de todos los ususarios
router.get('/', userAPIController.list);
router.get('/:id', userAPIController.detail);

module.exports = router;