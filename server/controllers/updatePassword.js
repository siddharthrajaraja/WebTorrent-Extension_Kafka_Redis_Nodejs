const {setPassword}=require('../database/queries/authQueries/setPassword')
exports.updatePassword=async(req,res)=>{
    const isUpdated=await setPassword(req.body);
    if(isUpdated==1)
        return res.status(204).json({flag:"PASSWORD UPDATED!!"})
    return res.status(200).json({flag:"USER NOT REGISTERED!!"})
}