var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/people', function (req, res, next) {
    res.send({
        people: [
            {
                name: "Charlie",
                special: true,
                extra_special: "true-er"
            },
            {
                name: "Jack",
                special: true,
                extra_special: true
            }
        ]
    });
});

router.get('/test', function (req, res, next) {
    connection.query('SHOW TABLES;',{}, function (response) {
        res.send(response);
    });
});

module.exports = router;
