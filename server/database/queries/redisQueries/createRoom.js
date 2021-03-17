const { saddAsync } = require('../../config/redisConnect')

const {setAddAsync}=require('../../config/redisConnect')
exports.createRoomRedis=async(creatorID,roomID,roomName)=>{
    try{
        const key=creatorID+process.env.ROOMS;
        const roomObj=JSON.stringify({
            roomID:roomID,
            roomName:roomName
        })
        console.log(roomObj)
        await setAddAsync(key,roomObj)
        return 1;
    }
    catch(e){
        console.log(e)
        return 0;
    }
}