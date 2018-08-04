//THIS IS BOILERPLATE FOR US TO USE MONGOOSE AD 7/31/18

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var delegateRoutes = require('./routes/delegateRoutes');
var bodyParser = require('body-parser')
const cors = require('cors');

var app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// DB CONFIG
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected') )
    .catch(err => console.log(err))


delegateRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${(port)}.`);
});