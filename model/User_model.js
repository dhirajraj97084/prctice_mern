const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    isAdmine:{
        type:String,
        require:false
    }
})

const Student=new mongoose.model('Student', userSchema);
module.exports=Student