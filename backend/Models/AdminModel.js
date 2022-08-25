const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    email:String,
    password:String,
    lastLogin:{
    type:Date,
    default:Date.now}
});

module.exports = mongoose.model('Admin', AdminSchema);
