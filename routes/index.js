var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', { title: 'Express' });
});

router.get('/:spec', function (req, res) {
	res.render('index', { title: 'Express' });
});

//for angular partial page service
router.get('/partial/:spec', function (req, res) {
	res.render(req.params.spec, { title: 'Express' });
});

module.exports = router;