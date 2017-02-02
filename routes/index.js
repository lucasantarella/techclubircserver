var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/charlie', function (req, res, next) {
    var date = new Date();

    res.render('charlie', {
        time: date.getTime()
    })
});


router.get('/people', function (req, res, next) {
    res.render('people');
});

module.exports = router;
