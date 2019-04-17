const express = require('express');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


app.use( bodyParser.urlencoded({ extended: false }) );
app.use(bodyParser.json());

requireDir('./src/models');


mongoose.connect('mongodb://localhost:27017/dale', { useNewUrlParser: true });

app.use('/api', require('./src/routes'));

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});