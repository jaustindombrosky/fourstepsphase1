const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});

const mongoURI = 'mongodb://fourstepsbeta:4Steps!@ds255451.mlab.com:55451/foursteps';
const mailchimpUtils = {
    URI: 'https://us18.api.mailchimp.com/3.0/lists/39bc555d39',
    APIKEY: '83a998ba8eeeb87a5635ffff587c8fcc-us18'
}



module.exports = {
    mailchimpUtils,
    mongoURI,
    secretOrKey: 'secret'
}