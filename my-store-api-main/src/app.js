const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorsHandling');
const config = require('./config');
const routes = require('./routes');
const nodemailer = require('nodemailer');
const emailRoutes = require('./emailRoutes');

const app = express();

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',  // Serveur SMTP de Gmail
    port: 587,
    secure: false,  
    auth: {
        user: 'mystoreynov@gmail.com',  
        pass: 'bkdjfkdfzuagoadl', 
    },
    logger: true,
    debug: true,
});

app.post('/api/send-email', async (req, res) => {
    try {
        // Logique d'envoi d'e-mail ici
        res.status(200).send('E-mail envoyé avec succès!');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail', error);
        res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    }
});

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