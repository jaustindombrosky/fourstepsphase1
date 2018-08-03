var express = require('express');
var pages = express.Router();
const path = require('path');



// GET LOGIN PAGE
pages.get('/login', function(req, res) { res.render("login.html") });

// GET REGISTER PAGE
pages.get('/register', function(req, res) { res.render("register.html") });

// MY COMMENTS ARENT AS GOOD AS MAYANKS
pages.get('/discover', function(req, res) { res.render("discover.html") });

// GET HOME PAGE
pages.get('/', function(req, res) { res.render("home.html") });


module.exports = pages;
