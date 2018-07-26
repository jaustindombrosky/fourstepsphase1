var express = require('express');
var pages = express.Router();
var path = require("path");

/* GET home page. */
pages.get('/register', function(req, res, next) {
    res.sendFile('views/register.html');
});

module.exports = pages;
