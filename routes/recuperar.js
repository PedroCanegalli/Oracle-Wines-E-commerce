var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/recuperar', function(req, res, next) {
  res.render('recuperar', { title: 'Recuperar' });
});

module.exports = router;
