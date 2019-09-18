var orm = require("./config/orm.js");


// Console log all the burgers
orm.selectAll("burgers");

// Console log all the client_name's.
//orm.insertOne("client_name", "clients");

// Console log all the parties that have a party-type of grown-up.
//orm.updateOne("parties", "party_type", "grown-up");

module.exports = burgerJS;