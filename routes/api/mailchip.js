var express = require('express');
var mailchip = express.Router();
const mailchimpUtils = require('../../config/keys').mailchimpUtils;


// ADDS USER TO MAILCHIMP LIST
mailchip.post(`/subscribe`, (req, res) => {
    let {URI, APIKEY} = mailchimpUtils;
    let { email_address } = req.body;
    var request = require("request");
    var options = { 
        method: 'POST',
        url: `${URI}/members`,
        headers: {   
            'anystring': `${APIKEY}`,
            'Cache-Control': 'no-cache',
            Authorization: 'Basic YW55c3RyaW5nOjgzYTk5OGJhOGVlZWI4N2E1NjM1ZmZmZjU4N2M4ZmNjLXVzMTg=',
            'Content-Type': 'application/json'},
            body: {email_address, status: 'subscribed'},
            json: true
        }

    request(options, function (error, response, body) {
    if (error) throw new Error(error);
        res.send(body)
    });
})

module.exports = mailchip;
