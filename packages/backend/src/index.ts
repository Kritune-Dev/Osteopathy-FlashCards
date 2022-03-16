'use strict';

//import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config()

//create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// secure apps by setting various HTTP headers
app.use(helmet());

// listen for requests and connect to mangoDB
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3000');
});
