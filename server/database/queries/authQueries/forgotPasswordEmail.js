const {userExists}=require('./userExists')
const {UserModel}=require('../../models/usersModel')
const md5=require('md5')
const {sendPasswordUpdationEmail}=require('../../../email/updatePasswordMail')

exports.forgotPasswordEmail=async(emailID)=>{
    try{
        if(await userExists(emailID)===0){
            return -1; // user does not exists
        }
    
        await sendPasswordUpdationEmail(emailID)
        return 1; // Success
    }
    catch(e){
        console.log(e)
        return 0; // Bad Request
    }
    
}