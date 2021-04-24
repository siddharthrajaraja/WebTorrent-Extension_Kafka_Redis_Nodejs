const {sismembersAsync}=require('../../config/redisConnect')
exports.userExistsInRoomRedis=async(roomID,emailID)=>{
    console.log("checking :",roomID+process.env.USERS,emailID)
    return await sismembersAsync(roomID+process.env.USERS,emailID)
}