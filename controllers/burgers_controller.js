var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(request, response) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        response.render("index", handlebarsObject);
    });
});

router.post("/api/burgers", function(request, response) {
    burger.insertOne(["burger_name", "devoured"], [request.body.burger_name, request.body.devoured], function(result) {
        response.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(request, response) {
    var condition = "id = " + request.params.id;
    console.log("condition", condition);
    burger.updateOne(
        {
            devoured: request.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return response.status(404).end();
            }
            response.status(200).end();
        }
    );
});

module.exports = router;