const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }, 
    role: {type: String, enum: ['FREELANCER', 'CLIENT'], default: 'CLIENT'},

   

});

module.exports = mongoose.model("user",userSchema);