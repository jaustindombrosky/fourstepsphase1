const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});

const mongoURI = process.env.mongoURI;

console.log(mongoURI)

module.exports = {
    mongoURI,
    secretOrKey: 'secret'
}