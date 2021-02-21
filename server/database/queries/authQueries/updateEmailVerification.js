const {UserModel}=require('../../models/usersModel')

exports.updateEmailVerification=async(uid)=>{
    try{
        await UserModel.updateOne({_id:uid},{
            isEmailVerified:true
        })
        return true;
    }
    catch(e){
        return false;
    }
}