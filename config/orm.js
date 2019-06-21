var connection = require("./connection.js");

function qMarks(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array.push("?");
    }
    return array.toString();
};

function objectToSQL(object) {
    var array = [];
    for (var key in object) {
        var value = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }
    return array.toString();
};

var orm = {
    selectAll: function(table, callback) {
        connection.query("SELECT * FROM " + table + ";", function(error, result) {
            if(error) {
                throw error;
            }
            callback(result);
        });
    },
    insertOne: function(table, columns, values, callback) {
        connection.query("INSERT INTO " + table + " (" + columns.toString() + ") VALUES (" + qMarks(values.length) + ")", values, function(error, result) {
            if(error) {
                throw error;
            }
            callback(result);
        });
    },
    updateOne: function(table, objectColumnValues, condition, callback) {
        connection.query("UPDATE " + table + " SET " + objectToSQL(objectColumnValues) + " WHERE " + condition, function(error, result) {
            if(error) {
                throw error;
            }
            callback(result);
        });
    }
};

module.exports = orm;