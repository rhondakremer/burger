var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(tableName, column1, column2, column1Value, column2Value, cb) {
    orm.insertOne(tableName, column1, column2, column1Value, column2Value, function(res) {
      cb(res);
    });
  },
  
updateOne: function(tableName, devouredColumn, devouredState, burgerID, cb) {
    orm.updateOne(tableName, devouredColumn, devouredState, burgerID, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
