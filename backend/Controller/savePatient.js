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
    status: pat.status
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