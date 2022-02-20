
const Model = require('./model');



function addMessage(message) {
   const myMessage = new Model(message);
   myMessage.save();
}


async function getMessages(){
  const messages =  await Model.find();
  return messages;
}


async function updateText(id,message){
   const foundmessage = await Model.findOne({
      _id: id
   });

   foundmessage.message = message; 
  const newMessage = await foundmessage.save();

  return newMessage;
}


module.exports = {
   add: addMessage,
   list: getMessages,
   updateText: updateText
}