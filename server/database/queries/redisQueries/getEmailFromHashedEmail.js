const {getAsync}=require('../../config/redisConnect')
exports.getUserIDFromHashedEmail=async(hashedEmail)=>{
    try{
        const uid=await getAsync(hashedEmail);
        return uid;
    }
    catch(e){
        return null;
    }
}