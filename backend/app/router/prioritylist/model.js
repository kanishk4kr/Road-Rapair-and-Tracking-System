const mongoose = require('mongoose');
const {Schema} = mongoose;

const ListSchema = new Schema({
    id: {
        type: String,
        required: true
    }, 
    labourID: {
        type: String,
        required: true
    },
    materials :{
        type : String,
    },
    quantity :{
        type : Number,
        default : 0
    },
    isCompleted : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('List', ListSchema)