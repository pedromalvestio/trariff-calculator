const express = require('express');
const routes = express.Router();

const tariff = require('./controllers/TariffController');

routes.get("/tariff/:consumption", tariff.comparison);

module.exports = routes;