const {jwtDecode}=require('../middlewares/auth/jwtDecode')
const {getToken}=require('../middlewares/auth/getToken')
const {getEpochDateTime}=require('../middlewares/EpochDateTime/getEpochDateTime')
const {getAllRoomsRedis}=require('../database/queries/redisQueries/getAllRooms')
const {refreshAllRooms}=require('../database/queries/roomQueries/refreshAllRooms')
const {createRoomRedis}=require('../database/queries/redisQueries/createRoom')
const {addUserToRoomRedis}=require('../database/queries/redisQueries/addUserToRoom')
exports.getAllRooms=async(req,res)=>{
    
    const cookies=req.get('cookie');
    const token=getToken(cookies)
    if(token===null||token===undefined)
        return res.status(401).json({flag:"USER NOT LOGGED IN!!"})
    const userObject=await jwtDecode(token)
    console.log(userObject)
    const currentTime=getEpochDateTime();
    if(userObject.exp<=currentTime)
        return res.status(400).json({flag:"SESSION EXPIRED!!"}) 
    
    const cachedRooms=await getAllRoomsRedis(req.query)
    if(cachedRooms.length==0){
        const allRooms=(await refreshAllRooms(req.query))
        allRooms.forEach(async(every)=>{
            await createRoomRedis(req.query.emailID,every.groupID,every.groupName)
            await addUserToRoomRedis(every.groupID,req.query.emailID)
        })
        const newAllRooms=[]
        allRooms.forEach(every=>{
            newAllRooms.push({roomID:every.groupID,roomName:every.groupName})
        })
        return res.status(200).json({flag:"CACHE UPDATED FOR ROOMS!!",allRooms:newAllRooms})
    }

    return res.status(200).json({flag:"RETURNED FROM CACHE!!",allRooms:cachedRooms})
}