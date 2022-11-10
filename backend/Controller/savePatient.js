const patient = require('../Models/PatientModel')

exports.savePatient = async (req,res) => {
    let pat = req.body;
    if (pat)
    patient.insertMany({
    patient_id: pat.patient_id,
    guardian_id: pat.guardian_id,
    full_name: pat.full_name,
    problem: pat.problem,
    special_condition: pat.special_condition,
    previous_problem: pat.previous_problem,
    datetime: pat.datetime,
    status: pat.status,
    doc_ref: pat.doc_ref,
    guard_name:pat.guard_name,
    contact_no:pat.contact_no,
    msg: pat.msg
    },async (err,data)=>{
        if(err){
            res.status(404)
            await res.json("error on saving patient!");
        }
        else{
            res.status(200)
            await res.json("patient saved!");
        }
    })
};