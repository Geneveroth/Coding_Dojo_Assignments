const bcrypt=require('bcrypt');
const User=require('../models/User.model');
const jwt=require('jsonwebtoken')


module.exports={
    register(req, res){
        User.create(req.body)
        .then(newUser=>{
            const token=jwt.sign({
                id:newUser._id,
                email:newUser.email
            },process.env.SECRET_KEY);
            res.cookie('token', token, {
                httpOnly:true 
            })
            .json({status:'Success'})
        })
        .catch(err=>res.status(400).json(err));
    },
    //async waits for certain things to happen before running:
    //1. find user by email
    //2. confirm pw match
    //3. somehow store some info about user
    async login(req,res){
        const {email, password}=req.body;
        const user=await User.findOne({email});//await + async lets us write code as tho synchronous. await waits for promise to resolve before running. must use await inside async function only
        if (user===null){
            return res.sendStatus(400);
            }
        const result=await bcrypt.compare(password, user.password);// password is from req.body, user.password is from user we just pulled, returns boolean
        if(result===false){
            return res.sendStatus(400);
            }
        const token=jwt.sign({
                id:user._id,
                email:user.email
            },process.env.SECRET_KEY);//put whatever we want in the token, but token isnt secure so dont store sensitive info. .sign is taking the data we pass in, along with secret key, and turning it into a jwt. store it in a cookie
        res.cookie('token', token, {
            httpOnly:true //dont want js code to have access to this value, only server has access, not client
        })
        res.json({status:'Success', token})
    },
    logout(req,res){//this will clear the token when a user logs out
        res.clearCookie('token')
        res.json({status:'Success'})
    }
}
