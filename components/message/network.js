const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();



router.get('/', function (req,res){
  const filterMessages = req.query.user || null;
  controller.getMessages(filterMessages)
     .then((messageList) => {
       response.success(req,res,messageList, 200);
     })
     .catch(e =>{
       response.error(req,res, 'Unexpected Error', 500, e);
     });
});




router.post('/', function (req,res){
 
  controller.addMessage(req.body.user, req.body.message)
     .then((fullMessage) => {
      response.success(req,res, fullMessage, 201)
     })
     .catch(e => {
      response.error(req,res, 'Informacao invalida', 400, 'Error no controlador');
     });

 });


 router.patch('/:id', function(req,res) {
    controller.updateMessage(req.params.id, req.body.message)
      .then((data) =>{
        response.success(req,res, data,200)
      })
      .catch( e => {
         response.error(req,res, 'Algo de errado! ): Tente novamente', 500,e)
      })

  //  res.send('OK')
 })


 module.exports = router;