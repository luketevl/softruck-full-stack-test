'use strict';

// Creating base routes
const express = require('express');

// Creating APP
const app = express();

// Allow CORS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
};
app.use(allowCrossDomain);


const route = require('./js/routes/route.js')(app);
const routeScrape = require('./js/routes/routeScrape.js')(app);

// Creating and Listening the SERVER
app.listen(595, () => console.log('http://localhost:595'));
