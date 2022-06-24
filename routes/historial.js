var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/historial', function(req, res, next) {
  res.render('historial', { title: 'Historial de Compras' });
});

module.exports = router;
