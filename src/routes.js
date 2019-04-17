const express = require('express');

const routes = express.Router();

const UserController =  require('./controllers/UserController');

routes.post('/register', UserController.register);

module.exports = routes;