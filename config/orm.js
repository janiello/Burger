var connection = require("./connection.js");

var orm = {
    selectAll: function() {
        connection.query("SELECT burger_name FROM burgers", function(error, result) {
            if(error) throw error;
            console.log(result);
        });
    },
    insertOne: function(burger_name) {
        connection.query("INSERT INTO burgers (burger_name) VALUES(??)", [burger_name], function(error, result) {
            if(error) throw error;
            console.log(result);
        })
    },
    updateOne: function(devoured) {
        connection.query("UPDATE burgers SET devoured = true WHERE devoured = false", function(error, result) {
            if(error) throw error;
            console.log(result);
        });
    }
};

module.exports = orm;