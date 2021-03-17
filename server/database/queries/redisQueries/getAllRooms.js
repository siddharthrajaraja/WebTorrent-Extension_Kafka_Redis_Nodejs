const {smembers}=require('../../config/redisConnect')
exports.getAllRoomsRedis=async({emailID})=>{
    const data=(await smembers(emailID+process.env.ROOMS)).map(every=>{return JSON.parse(every)})
    return data
}