const express = require('express');
var app = express();
const server = require('http').Server(app);


const bodyParser = require('body-parser');
const socket = require('./socket');
const router = require('./network/routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

require('dotenv').config();

//DB Config
require('./database/config').dbConnection();


router(app);




app.use('/app', express.static('public'));


server.listen(process.env.PORT, () =>{
   console.log(`Rodando na porta ${ process.env.PORT}`)
});