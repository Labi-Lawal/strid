const express = require('express');
const server = express();
const bodyParser = require('body-parser');

//template engine for sending data to userinterface.
server.set('view engine', 'ejs');

//set up middleware for static files
server.use(express.static('./public'));

//set up middleware for json data
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

const controller = require('./controllers/control');
controller(server);

const database = require('./controllers/dbconnect');

var port = process.env.PORT || 3300;
server.listen(port, ()=>{
    console.log();
    console.log('***************************************************');
    console.log('\x1b[32m%s\x2b','****** STARTED: - STRID IS RUNNING - (3000) *******');
});

