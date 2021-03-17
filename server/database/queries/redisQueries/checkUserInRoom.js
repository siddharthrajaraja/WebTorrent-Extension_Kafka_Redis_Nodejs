const {sismembersAsync}=require('../../config/redisConnect')
exports.userExistsInRoomRedis=async(roomID,emailID)=>{
    return await sismembersAsync(roomID+process.env.USERS,emailID)
}