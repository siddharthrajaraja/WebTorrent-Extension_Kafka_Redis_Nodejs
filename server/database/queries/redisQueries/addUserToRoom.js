const {setAddAsync}=require('../../config/redisConnect')
exports.addUserToRoomRedis=async(roomID,userID)=>{
    try{
        const key=roomID+process.env.USERS;
        console.log("key :",key)
        await setAddAsync(key,userID);
        return 1;
    }
    catch(e){
        console.log(e)
        return 0;
    }
}