const {UserModel}=require('../../models/usersModel')
const {setEmailExpiration}=require('../redisQueries/emailExpiration')
const md5=require('md5')
const {sendVerificationEmail}=require('../../../email/verificationMail')
const {userExists}=require('./userExists')
exports.registerUser=async(data)=>{
    try{
        if(await userExists(data.emailID))
            return -1;
        data.password=md5(data.password)
        data.isEmailVerified=false;
        var data=await UserModel.create(data)
        const hashedEmail=md5(data.emailID)
        await setEmailExpiration(hashedEmail,data._id)
        await sendVerificationEmail(data.emailID,data.firstName,data.lastName)
        return 1;
    }
    catch(e){
        console.log(e)
        return 0;
    }

}