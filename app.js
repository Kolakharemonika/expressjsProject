var express = require('express');
var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');

var generate_uid = require('./routes/generate_uid');
var customer = require('./routes/customer');
var user = require('./routes/user');
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(cookieParser())
//simple route
app.get('/', (req, res) => {
    res.send( "Welcome to express-js example");
});
app.use('/api/v1/generate_uid', generate_uid);
app.use('/api/v1/customer', customer);
app.use('/api/v1/user', user);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization, X-Requested-With");
    next(); 
})
module.exports = app;