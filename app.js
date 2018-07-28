const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const pages = require('./routes/pages');
const path = require('path');


const users = require('./routes/api/users');


const app = express();
app.use(express.static(__dirname));




// view engine setup
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Store all HTML files in view folder.



// DB CONFIG
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected') )
    .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());

// Passport Config
// require('./config/passport')(passport);

// Use Routes 
app.use('/api/users', users)

// Use Pages
app.get('/register',function(req,res){
    res.sendFile(path.join(__dirname + '/views/' + 'register.html'));
});

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})

