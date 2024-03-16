const express=require('express');
const router=express.Router();
const data=require('../controller/Auth_controller')

router.route('/').get((req,res)=>{
    res.send('welcome to home page');
})

router.route('/about').get((req,res)=>{
    res.send('aap about page');
})

router.route('/login').get(data.Login);
router.route('/regi').post(data.regi);

module.exports=router;