const Doctor = require("../Models/DoctorModel");

exports.giveAllDocs = async (req,res)=>{
    Doctor.find({},(err,data)=>{
        if(err){
            console.error("Error while fetching all doctors");
            res.status(500);
            res.json();
        }
        else if(data != null){
            console.log(data)
            res.status(200);
            res.json(data);
        }
    });
}