const mongoose = require('mongoose');
const {Schema} = mongoose;

const complaintSchema = new Schema({
    location: {
        type: String,
        required: true
    },  
    type: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    },
});

module.exports = mongoose.model('Complaint' , complaintSchema);