const mongoose = require('mongoose');
const loginSchema = new mongoose.Schema({
    email:String,
    password:String,
    lastLogin:{
    type:Date,
    default:Date.now}
});

module.exports = mongoose.model('Login', loginSchema);
