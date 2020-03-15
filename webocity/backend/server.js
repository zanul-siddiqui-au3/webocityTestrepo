const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// ------------------------------- Files requires
const ProductRoute = require("./routes/product");

// --------------------- DB File

const db = require("./connection/connection");

// ------------------------------ Middlewares

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ---------------------- Routes

app.use("/api/products", ProductRoute);

app.listen(process.env.PORT, () => {
  console.log("Server running on Port", process.env.PORT);
});

// "client": "cd.. && cd frontend/webocity-test && npm start",
// "start": "concurrently \"nodemon server.js\" \"npm run client\"",
