const patient = require('../Models/PatientModel')

exports.getPendingApp = async (req,res) => {
    patient.find({status:"pending"},async (err,data)=>{
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
exports.getAllApp = async (req,res) => {
    patient.find({status:{$ne:"pending"}},async (err,data)=>{
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
