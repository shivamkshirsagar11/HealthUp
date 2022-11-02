const Login = require("../Models/LoginModel")
const User = require("../Models/UserModel")
const patient = require("../Models/PatientModel")
exports.GrantLoginToUser = async (req, res)=>{
    let data = req.body;
    var msg="Verifying";
    if(data){
    (async ()=>{
  Login.findOne({$and:[{email:data.email},{password:data.password}]},{__v:0},async (err,datadb)=>{
            if(datadb !=null){
            msg = "User Found!!";
            var temp1;
            temp1 = datadb
              User.findOne({email:data.email},async (err,datadb)=>{
                  var temp2 = datadb;
                  // let store = {msg:msg,user:temp1,userDet:temp}
                  if(datadb != null){
                    let store = {msg:msg,user:temp1,userDet:temp2};
                    console.log(store);
                    await res.json(store);
                  }
                  else{
                  await res.json(store);
                  }
              });
            }
            else{
              msg = "No User Found!";
              let store = {msg:msg,user:datadb}
              console.log(store);
              await res.json(store);
            }
   });
    // let date = new Date().toLocaleString();
    // datadb.lastLogin = date ;
    // await datadb.save();
    })();
}
else{
    res.json("Error occured!");
}
}