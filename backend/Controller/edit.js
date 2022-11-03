const p = require('../Models/PatientModel')

exports.editApp = async (req,res) => {
    let pat = req.body;
    console.log("in updating....")
    p.findByIdAndUpdate(pat.oldid,{
        full_name:pat.full_name,
        problem: pat.problem,
        special_condition: pat.special_condition,
        previous_problem: pat.previous_problem,
        datetime: pat.datetime,
        status: pat.status
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