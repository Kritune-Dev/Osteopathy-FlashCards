'use strict';

//import express and winston
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config()

//import bdd connection
const { connectToMongoDB } = require('./config/mongo');

//import routes
const { flashCardRouter } = require('./routes/flashcard');

//create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// secure apps by setting various HTTP headers
app.use(helmet());

// setup routes if path is /api/flashcards
app.use('/api/flashcards', flashCardRouter);

// listen for requests and connect to mangoDB
app.listen(process.env.PORT, () => {
    connectToMongoDB();
    console.log(`Server is listening on port ${process.env.PORT}`);
});
