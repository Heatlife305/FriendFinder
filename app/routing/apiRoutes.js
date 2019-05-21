//Require the friends data file
let friends = require('../data/friends.js');

module.exports = app => {

    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

}