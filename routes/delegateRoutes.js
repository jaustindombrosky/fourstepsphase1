const pages = require('./pages');
const mailchip = require('./api/mailchip');
const users = require('./api/users')

function delegateRoutesFor(app) {
    app.use('/', pages)
    app.use('/api/users', users);
    app.use('/api/mailchimp', mailchip);
    
    app.all('*', (req, res) => {
        res.status(404).send({message: 'Cannot access any resource at ' + req.originalUrl});
    });
    
    return app;
}

module.exports = delegateRoutesFor;