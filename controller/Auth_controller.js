const Student=require('../model/User_model');
const Login=async(req,res)=>{
    try {
       res.send('welcome to login page') 
    } catch (error) {
        console.log('something is wrong');
    }
}

const regi=async(req,res)=>{
    try {
        console.log(req.body);
        const {username,email,password,phone}=req.body;
        const userExist=await Student.findone({email});
        if(userExist){
            return res.json({"msg":"email already exits"})
        }
        const usercreated=await student.create({username,email,password,phone});
        res.json({"msg":usercreated});
       res.send('welcome to registation page') 
    } catch (error) {
        console.log('something is wrong');
    }
}

module.exports={Login,regi};