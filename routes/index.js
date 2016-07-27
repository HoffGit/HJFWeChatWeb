var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', { title: '恒骏丰补胎匠' });
});

router.get('/:spec', function (req, res) {
	res.render('index', { title: '恒骏丰补胎匠' });
});

//for angular partial page service
router.get('/partial/:spec', function (req, res) {
	res.render(req.params.spec, { title: '恒骏丰补胎匠' });
});

module.exports = router;