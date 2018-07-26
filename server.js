const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
// app.use('/api/users', users)



const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})