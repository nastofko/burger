const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// router.get('/', function (req, res) {
//     res.redirect('/burgers');
// });

router.get('/', function (req, res) {
    burger.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function (req, res) {
    burger.create([
        'burger_name', 'devoured'
    ],
        [
            req.body.burger_name, req.body.devoured
        ],
        function (result) {
            res.json({ id: result.insertID });
        });
});

router.put('/burgers/update/:id', function (req, res) {
    let condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
        console.log(result.changedRows)
    });
});

router.delete('burgers/delete/:id', function (req, res) {
    let condition = "id = " + req.params.id;

    burger.delete(condition, function (req, res) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;

//end
