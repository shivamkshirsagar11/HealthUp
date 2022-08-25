const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({
    full_name:String,
    specialization_in:String,
    doctor_id:String,
    mobile_no:String,
    availability_time:String

});

module.exports = mongoose.model('Doctor', DoctorSchema);
