const {UserModel}=require('../../models/usersModel')

exports.userExists=async(emailID)=>{
    try{
        var data=await UserModel.findOne({
            emailID:emailID
        })  
        console.log(data===null)
        if(data===null){
            return 0;
        }
        return 1;
    }
    catch(e){
        return 0;
    }
}