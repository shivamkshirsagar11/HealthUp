const Login = require("../Models/LoginModel")

exports.GrantLoginToUser = async (req, res)=>{
    let data = req.body;
    var msg="Verifying";
    if(data){
    (()=>{
   Login.findOne({$and:[{email:data.email},{password:data.password}]},{_id:0,__v:0},(err,datadb)=>{
    console.log(datadb);
            if(datadb !=null){
            msg = "User Found!!";
            res.json(msg);
            }
            else{
              msg = "No User Found!";
              res.json(msg);
            }
   })
    })();
}
else{
    res.json("Error occured!");
}
}