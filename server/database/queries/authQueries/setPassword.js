const {UserModel}=require('../../models/usersModel')
const md5=require('md5')

exports.setPassword=async(data)=>{
    try{
        data={
            emailID:data.emailID,
            password:data.password,
            hashedEmail:data.id
        }
        console.log(data)
        const updateObj={
            password:md5(data.password)
        }
        const userObj={
            emailID:data.emailID,
            isEmailVerified:true
        }
        const updateLogs=await UserModel.updateOne(userObj,updateObj)
        if(updateLogs.nModified===1)
            return 1;
        return 0;
    }
    catch(e){
        console.log(e)
        return 0;
    }
}