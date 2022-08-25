const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
    patient_id:String,
    full_name:String,
    problem:String,
    any_special_condition:String,
    any_previous_medication:String,
    guardian:String,
    doctor_name:String,
    appointment_date:String,
    appointment_genuine_id:String,
    appointment_casual_id:String 
});

module.exports = mongoose.model('Patient', PatientSchema);
