const p = require('../Models/PatientModel')

exports.deleteApp = async (req,res) => {
    let pat = req.body;
    console.log("in deleting....")
    console.log(pat)
    p.findByIdAndDelete(pat.oldId).then(async (data)=>{
        if(data == null){
            console.log(err)
            return await res.json("error")
        }else{
            console.log("deleted")
            return await res.json("done")
        }
    })
}
exports.deleteAppAdmin = async (req,res) => {
    let pat = req.body;
    console.log("in deleting....")
    console.log(pat)
    p.findByIdAndUpdate(pat.oldId,{
        status: "cancelled",
        msg:"Your Appointment is cancelled. Please Contact the administrator with Application ID"
        },(err,data)=>{
            if(err){
                res.status(404)
                console.log("error on updating")
                res.json("error")
            }
            else{
                res.status(200)
                console.log("success on updating patient!")
                res.json("done")
            }
        })
}