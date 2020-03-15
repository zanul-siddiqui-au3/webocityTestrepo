// ------------------------ Modules
const sequelize = require("sequelize");

// --------------------------------------------- Models Required

const productModel = require("../models/productModel");

// -------------------------------------------------- COnnection with database

const connection = new sequelize("webocity", "sahil", "123456789", {
  host: "localhost",
  dialect: "postgres"
});

connection
  .authenticate()
  .then(() => console.log("Connected With Databse"))
  .catch(err => console.log(err));

// -------------------------------- connect Model with connection

const productDetails = productModel(connection, sequelize);

connection
  .sync({
    force: false
  })
  .then(() => {
    console.log("Table Created Successfully");
  })
  .catch(err => {
    throw err;
  });

module.exports = { productDetails };
