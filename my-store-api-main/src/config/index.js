require('dotenv').config();

const config = {
    port: process.env.PORT,
    frontend_url: process.env.FRONTEND_URL,
};

module.exports = config;
