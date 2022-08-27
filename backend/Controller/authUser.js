const Login = require("../Models/LoginModel")
const User = require("../Models/UserModel")
exports.GrantLoginToUser = async (req, res)=>{
    let data = req.body;
    var msg="Verifying";
    if(data){
    (async ()=>{
  Login.findOne({$and:[{email:data.email},{password:data.password}]},{__v:0},async (err,datadb)=>{
            if(datadb !=null){
            msg = "User Found!!";
            var temp;
            User.findOne({email:data.email},async (err,datadb)=>{
              temp = datadb;
            let store = {msg:msg,user:datadb,userDet:temp}
            console.log(store);
            console.log(temp);
            await res.json(store);
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