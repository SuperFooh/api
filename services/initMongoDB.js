const path = require('path');
require("dotenv").config({ path:'/.env' });
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING
        ? process.env.MONGODB_CONNECTION_STRING
        : 'mongodb://localhost:27017/wot'
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true //deprecation fix
    }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error:')); // enlaza el track de error a la consola (proceso actual)
db.once('open', () => {
    console.log('Mongo connected'); // si esta todo ok, imprime esto
});

module.exports = db
 
