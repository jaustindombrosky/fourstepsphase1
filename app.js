//THIS IS BOILERPLATE FOR US TO USE MONGOOSE AD 7/31/18

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var delegateRoutes = require('./routes/delegateRoutes');
var bodyParser = require('body-parser')

//when deployed change the localhost


// mongoose
//     .connect(dbUrl)
//     .then(() => console.log('MongoDB Connected') )
//     .catch(err => console.log(err))

// var routes = require('./routes/index');
// var api = require('./routes/api');

var app = express();



// view engine setup
var engines = require('consolidate');

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));


// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());





// app.get('/', function (req, res)
// {
//     res.render('home.html');
// });



delegateRoutes(app);

// app.use('/', routes);
// app.use('/api', api);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${(port)}.`);
});