var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



router.get('/modules', function (req, res, next) {
  res.render('modules', { title: 'Express' });
});


router.get('/add_translators', function (req, res, next) {
  res.render('add_translators', { title: 'Express' });
});

router.get('/show_translators', function (req, res, next) {
  res.render('show_translators', { title: 'Express' });
});

router.get('/add_modules', function (req, res, next) {
  res.render('add_modules', { title: 'Express' });
});




router.get('/modules/:modulename/translator', function (req, res, next) {
  res.render('translator');
});



module.exports = router;
