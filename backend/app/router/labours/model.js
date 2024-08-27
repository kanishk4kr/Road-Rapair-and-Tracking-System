const mongoose = require('mongoose');
const {Schema} = mongoose;

const LabourSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    expertise: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    accountno: {
        type: Number,
        required: true
    },
    isAssigned : {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Labour', LabourSchema)