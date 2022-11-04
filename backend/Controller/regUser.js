const User = require("../Models/UserModel")
const Login = require("../Models/LoginModel")
exports.RegisterUser = async (req, res)=>{
    let data = req.body;
    let e1 = 1;
    if(data){
        try{
     Login.findOne({email:data.email},{_id:0,__v:0},async (err,datadb)=>{
                    if(datadb !=null){
                        e1=0;
                        let e= "Email Already in use...";
                        console.log("Email error");
                        res.status(500)
                        await res.json(e);
                    return
                    }
                    else if(datadb==null){
                        Login.insertMany({email:data.email,password:data.password,role:"user"},(err,datadb)=>{
                            if(err) console.log(err);
                            else console.log("New user added")
                        });
                        User.insertMany({
                            email: data.email,
                            address: data.address,
                            full_name: data.full_name,
                            mobile_no: data.mobile
                           },async (err,data)=>{
                            if(err){
                                let e = "Something Went Wrong...!";
                                res.status(500)
                                await res.json(e)
                            }else{
                                let e = "Registration Successful!";
                                res.status(200)
                                await res.json(e);
                            }
                           })
                    }
           })
}
catch(err){
    console.log(err);
    let e = "Something Went Wrong...!";
    res.json(e)
}
}
else{
    let e = "Something Went Wrong...!";
    res.json(e)
}
}