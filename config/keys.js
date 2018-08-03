const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});

const mongoURI = 'mongodb://fourstepsbeta:4Steps!@ds255451.mlab.com:55451/foursteps';

console.log(mongoURI)

module.exports = {
    mongoURI,
    secretOrKey: 'secret'
}