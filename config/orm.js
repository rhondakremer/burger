var connection = require("./connection.js");

var orm = {
  selectAll: function(tableName) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function(tableName, column1, column2, column1Name) {
    var queryString = "INSERT INTO ?? (??, ??) VALUES (?, false);";

    console.log(queryString);

    connection.query(queryString, [tableName, column1, column2, column1Name], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  /*updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString = 

    console.log(queryString);

    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }*/
};

module.exports = orm;
