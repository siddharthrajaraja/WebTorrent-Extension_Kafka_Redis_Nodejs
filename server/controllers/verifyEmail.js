const {isEmailExpired}=require('../database/queries/redisQueries/emailExpiration')
const {getUserIDFromHashedEmail}=require('../database/queries/redisQueries/getEmailFromHashedEmail')
const {updateEmailVerification}=require('../database/queries/authQueries/updateEmailVerification')
exports.verifyEmail=async(req,res)=>{
    const isExpired=await isEmailExpired(req.params.hashedEmailID)
    if(isExpired==0)
        return res.status(440).json({flag:"PAGE EXPIRED!!"})
    const uid=await getUserIDFromHashedEmail(req.params.hashedEmailID)
    if(uid===null)
        return res.status(500).json({flag:"DATABASE ERROR!!"})    
    if(!await updateEmailVerification(uid))
        return res.status(500).json({flag:"DATABASE ERROR!!"})
    return res.status(200).json({flag:"EMAIL VERIFIED SUCCESSFULLY!!"})
}