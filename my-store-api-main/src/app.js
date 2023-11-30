const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorsHandling');
const config = require('./config');
const routes = require('./routes');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// cors
app.use(
    cors(
        {
            origin: config.frontend_url,
        },
    ),
);

//access to public folder
app.use(express.static(__dirname + '/public'));

// initial route
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to app-store-api application.' });
});

// api routes prefix
app.use(
    '/api',
    routes,
);

// error handling
app.use(errorHandler);

// run server
app.listen(config.port, () => {
    console.log('server launch');
});

module.exports = app;
