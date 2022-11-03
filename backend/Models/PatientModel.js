const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
    patient_id:String,
    guardian_id:String,
    full_name:String,
    problem:String,
    special_condition:String,
    previous_problem:String,
    datetime:String,
    status:String,
    doc_ref:String,
    msg:String,
});

module.exports = mongoose.model('Patient', PatientSchema);
