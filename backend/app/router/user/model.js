const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: Number,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    isSupervisor: {
        type: Boolean,
        required: true
    },
    isAdmin : {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema)