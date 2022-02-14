const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', function (req,res){
   res.send('Lista de mensagem')
});


router.post('/message', function (req,res){
    res.send('Mensagem adicionada')
 });


// app.use('/', function(req,res){
//     res.send('Hello');
// });

app.listen(3000);
console.log('Rodando na porta 3000')