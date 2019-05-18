// Dependencies
// =============================================================
let = express = require("express");
let = path = require("path");

// Sets up the Express App
// =============================================================
let = app = express();
let = PORT = 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());