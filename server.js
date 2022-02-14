const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response')

const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(router);

router.get('/message', function (req,res){
    console.log(req.headers);
    res.header({
       "Custom-Header": "Tem o nosso valor personalizado",
    });
    response.success(req,res, 'Lista de mensagens');
});


router.post('/message', function (req,res){
  console.log(req.body);
 if(req.query.error == "ok"){
   response.error(req,res, 'Error Inesperado', 500, 'Simulacao de erros')
 }
 response.success(req,res, 'Criado corretamente', 201)
  
 });


app.use('/app', express.static('public'));

app.listen(3000);
console.log('Rodando na porta 3000');


// app.listen(process.env.PORT, () =>{
//    console.log(`Rodando na porta ${ process.env.PORT}`)
// });