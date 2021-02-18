const {isEmailExpired}=require('../database/queries/redisQueries/emailExpiration')
exports.verifyEmail=async(req,res)=>{
    var isExpired=await isEmailExpired(req.params.hashedEmailID)
    if(isExpired==0)
        return res.status(403).json({flag:"PAGE EXPIRED!!"})
    return res.status(200).json({flag:"LOADED!!"})
}