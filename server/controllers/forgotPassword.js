const {forgotPasswordEmail}=require('../database/queries/authQueries/forgotPasswordEmail')
exports.forgotPassword=async(req,res)=>{
    const isEmailSent=await forgotPasswordEmail(req.body.emailID)
    console.log("isEmailSent :",isEmailSent)
    if(isEmailSent==-1)
        return res.status(401).json({flag:"USER NOT FOUND!!"})
    if(isEmailSent)
        return res.status(200).json({flag:"EMAIL SENT TO REGISTERED EMAIL ID!!"})
    return res.status(400).json({"flag":"SERVER ERROR!!"})
}