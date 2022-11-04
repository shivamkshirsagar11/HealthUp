const Login = require("../Models/LoginModel")
const User = require("../Models/UserModel")
const patient = require("../Models/PatientModel")
exports.GrantLoginToUser = async (req, res)=>{
    let data = req.body;
    var msg="Verifying";
    d = new Date();
utc = d.getTime() + (d.getTimezoneOffset() * 60000);
nd = new Date(utc + (3600000*+5.5));
var ist =  nd.toLocaleString();
    if(data){
    (async ()=>{
  Login.findOne({$and:[{email:data.email},{password:data.password}]},{__v:0},async (err,datadb)=>{
            if(datadb !=null){
            msg = "User Found!!";
            var temp1;
            temp1 = datadb
            Login.findByIdAndUpdate(datadb._id,{lastLogin:ist},(err,data)=>{
              console.log("updating last login...")
                console.log(err,data)
            })
              User.findOne({email:data.email},async (err,datadb)=>{
                  var temp2 = datadb;
                  // let store = {msg:msg,user:temp1,userDet:temp}
                  if(datadb != null){
                    let store = {msg:msg,user:temp1,userDet:temp2};
                    console.log(store);
                    await res.json(store);
                  }
                  else{
                    let store = {msg:msg,user:temp1,userDet:{}};
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