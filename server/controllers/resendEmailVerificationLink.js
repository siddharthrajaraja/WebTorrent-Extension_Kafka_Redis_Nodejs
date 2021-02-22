const {getUserLoggedIn}=require('../database/queries/authQueries/getUserLoggedIn')
const {setEmailExpiration}=require('../database/queries/redisQueries/emailExpiration')
const {sendVerificationEmail}=require('../email/verificationMail')
exports.resendEmailVerificationLink=async(req,res)=>{
    try{
        const userObject=await getUserLoggedIn({emailID:req.query.emailID})
        console.log(userObject)
        await setEmailExpiration(userObject.hashedEmail,userObject._id)
        await sendVerificationEmail(userObject.emailID,userObject.firstName,userObject.lastName)
        res.status(200).json({flag:"EMAIL SENT!!"})
    }
    catch(e){
        res.status(400).json({flag:"USER NOT FOUND!!"})
    }
}