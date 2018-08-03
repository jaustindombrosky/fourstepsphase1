const pages = require('./pages');
const api = require('./api');


function delegateRoutesFor(app) {
    app.use('/',
        pages
    )
    app.use('/api', 
        api
    );

    app.all('*', (req, res) => {
        res.status(404).send({message: 'Cannot access any resource at ' + req.originalUrl});
    });
    
    return app;
}

module.exports = delegateRoutesFor;