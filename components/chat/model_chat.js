
const Schema = mongoose.Schema;

const mySchema = new Schema({

    users: [
        type: Schema.ObjectId,
        ref: 'User'
    ]

});