const { saddAsync } = require('../../config/redisConnect')

const {setAddAsync}=require('../../config/redisConnect')
exports.createRoomRedis=async(creatorID,roomID)=>{
    try{
        const key=creatorID+process.env.ROOMS;
        await setAddAsync(key,roomID)
        return 1;
    }
    catch(e){
        console.log(e)
        return 0;
    }
}