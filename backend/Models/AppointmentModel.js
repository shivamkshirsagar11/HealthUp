const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
    doctor_name:String,
    doctor_id:String,
    user_id:String,
    patient_id:String,
    appointment_date:String,
    appointment_time:String,
    appointment_genuine_id:String,
    appointment_casual_id:String

});

module.exports = mongoose.model('Appointment', AppointmentSchema);
