// Dependencies
// =============================================================
let = express = require("express");
let = path = require("path");

// Sets up the Express App
// =============================================================
let = app = express();
let = PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('app/public'));

//Router
//require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

//Listening to the port that was set up
app.listen(PORT, () => console.log("Listening on port %s", PORT));
