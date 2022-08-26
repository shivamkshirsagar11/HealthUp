const Patient = require("../Models/PatientModel")

exports.RegisterPatient = async (req,res)=>{
    let patient = req.body;
    if(patient){
        Patient.insertMany({
            patient_id: patient.pid,
            full_name: patient.fname,
            problem: patient.prob,
            any_special_condition: patient.anyP,
            any_previous_medication: patient.preM,
            guardian: patient.guardian,
            guardian_id: patient.gid,
            doctor_name: patient.dname,
            appointment_date:{type:String,default:'to be appointed'},
            appointment_genuine_id: patient.agid,
            appointment_casual_id: patient.acid 
        });
    }
    else{}
};