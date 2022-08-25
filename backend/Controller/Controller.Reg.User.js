const User = require("../Models/UserModel")
const Login = require("../Models/LoginModel")
exports.RegisterUser = async (req, res)=>{
    let data = req.body;
    if(data){
    (()=>{
        Login.findOne({email:data.email},{_id:0,__v:0},(err,datadb)=>{
                    if(datadb !=null){
                    res.json("Email Already in use...");
                    }
           })
   User.InsertOne({
    email: data.email,
    address: data.address,
    full_name: data.full_name,
    mobile_no: data.mobile
   },(err)=>{
    if(err){
        res.json("Something went wrong. Please try again...");
    }else{
        res.json("Registration Successful!")
    }
   })
    })();
}
else{
    res.json("Something Went Wrong...!");
}
}