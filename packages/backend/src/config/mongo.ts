//Module with mongo connection and deconnectionwith mongoose

//import mongoose
const mongoose = require('mongoose');
require('dotenv').config()

//connect to mongoDB
exports.connectToMongoDB = () => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.log(err));
} 
