var connection = require("./connection.js");

// Helper function for generating MySQL syntax
/*function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
} */



var orm = {
  selectAll: function(tableName, callback) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      console.log(result);
      callback(result)
    });
  },

    /*
  insertOne: function(tableName, column1, column2, column1Value) {
    var queryString = "INSERT INTO ?? (??, ??) VALUES (?, false);";

    console.log(queryString);

    connection.query(queryString, [tableName, column1, column2, column1Value], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
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
