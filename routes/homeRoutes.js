const express = require('express');

// homeRoutes is an instance of the express router
// It is being used to define routes
// The router will be added as a middleware and will take control
// of requests starting with the path / record
const homeRoutes = express.Router();

// This is to connect to the database
const dbo = require('../db/conn');

// This route will Create a new subscriber
homeRoutes.route('/').post((req, response) => {
    let db_connect = dbo.getDB();
    let myObj = {
        email: req.body.email,
    };
    db_connect.collection('subscriptions').insertOne(myObj, (err, res) => {
        if (err) throw err;
        response.json(res);
    });
});

module.exports = homeRoutes;