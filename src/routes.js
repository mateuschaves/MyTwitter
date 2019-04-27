const express = require('express');

const routes = express.Router();

const UserController =  require('./controllers/UserController');
const TweetController = require('./controllers/TweetController');

const  { verifyToken }  = require('../src/utils/token');

routes.post('/register', UserController.register);
routes.post('/auth', UserController.auth);
routes.get('/me', verifyToken, UserController.me);

routes.post('/tweet', verifyToken, TweetController.tweet);
routes.get('/tweet/like/:id', verifyToken, TweetController.like);
routes.get('/tweet/retweet/:id', verifyToken, TweetController.retweet);

module.exports = routes;