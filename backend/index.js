const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const dotenv = require("dotenv");

// initialize the app
const app = express();
app.use(dotenv);
dotenv.config();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const jwt = require("jsonwebtoken");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port)
    console.log(`Database connected successfully, server running on port: ${port}`);
  })
  .catch((err) => {
    console.log("An error occured while connecting. Try again.");
  });
