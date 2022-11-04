const patient = require('../Models/PatientModel')

exports.getPatient = async (req,res) => {
    let data = req.body;
    console.log(data);
    patient.find({$and:[{guardian_id:data.id},{status:{$eq:"pending"}}]},async (err,data)=>{
        if(data == null){
            res.status(404);
            await res.json("No registered patient found!");
        }
        else{
            res.status(200);
            await res.json(data);
        }
    })
};
exports.getPatientAll = async (req,res) => {
    let data = req.body;
    console.log(data);
    patient.find({$and:[{guardian_id:data.id},{status:{$ne:"pending"}}]},async (err,data)=>{
        if(data == null){
            res.status(404);
            await res.json("No registered patient found!");
        }
        else{
            res.status(200);
            await res.json(data);
        }
    })
};