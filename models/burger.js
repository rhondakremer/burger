var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(tableName, column1, column2, column1Value, column2Value, callback) {
    orm.insertOne(tableName, column1, column2, column1Value, column2Value, function(res) {
      callback(res);
    });
  },
  updateOne: function(tableName, devouredColumn, devouredState, burgerID, callback) {
    orm.updateOne(tableName, devouredColumn, devouredState, burgerID, function(res) {
      callback(res);
    });
  },

  deleteOne: function(tableName, burgerID, callback) {
    orm.deleteOne(tableName, burgerID, function(res) {
      callback(res);
    })
  }
};
// Export the database functions for the controller (burgers_constroller.js).
module.exports = burger;
