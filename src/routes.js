const express = require('express');

const routes = express.Router();

const UserController =  require('./controllers/UserController');

routes.post('/register', UserController.register);
routes.post('/auth', UserController.auth);

module.exports = routes;