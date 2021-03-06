const jwt=require('jsonwebtoken');

module.exports.authenticate=function(req, res, next){
    try{
        
        jwt.verify(req.cookies.token, process.env.SECRET_KEY);//looks for the cookie called token
        next();
    }catch(e){
        res.status(401).json({message:'Unauthorized'});
    }
}