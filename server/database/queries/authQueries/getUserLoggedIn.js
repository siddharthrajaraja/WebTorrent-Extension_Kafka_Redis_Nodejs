const {UserModel}=require('../../models/usersModel')

exports.getUserLoggedIn=async(data)=>{
    const userDetails=await UserModel.findOne(data);
    return userDetails
}