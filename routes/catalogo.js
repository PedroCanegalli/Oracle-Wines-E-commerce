var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('catalogo', { title: 'Catalogo de Productos' });
});

module.exports = router;
