const router=require('express').Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')

router.post('/register',async(req,res)=>{
    const username=req.body.username
    const email=req.body.email
    const password=req.body.password
    const age=req.body.age
    try{
        //generate  password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password, salt)
        const newUser=new User({
            username:username,
            email:email,
            password:hashedPassword,
            age:age
        })
        const user =await newUser.save()
        res.status(200).json(user)
    } 
    catch(err){
        console.log(err)
    }

})

router.post('/login',async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email})
        !user && res.status(404).send("user not found")
        const validPassword= await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(404).send("wrong password") 
        res.status(200).json(user)

    }catch(err){
        console.log("login error",err)
    }
})

module.exports=router