const { Schema, model } = require('mongoose');



const mySchema = new Schema({

  chat: {
      type: Schema.ObjectId,
      ref: 'Chat'
  },

   user: {
       type: Schema.ObjectId,
       ref: 'User',
   }, 
   message: {
       type: String,
       required: true
   },
   date: Date

});


module.exports = model('Message', mySchema);