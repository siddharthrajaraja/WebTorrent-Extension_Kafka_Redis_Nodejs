const {jwtDecode}=require('../middlewares/auth/jwtDecode')
const {getToken}=require('../middlewares/auth/getToken')
const {getEpochDateTime}=require('../middlewares/EpochDateTime/getEpochDateTime')
const {v4}=require('uuid')
const {createRoomRedis}=require('../database/queries/redisQueries/createRoom')
const {addUserToRoomRedis}=require('../database/queries/redisQueries/addUserToRoom')
const {createRoomMongo}=require('../database/queries/roomQueries/createRoom')

exports.createRoom=async(req,res)=>{
    const cookies=req.get('cookie');
    const token=getToken(cookies)
    if(token===null||token===undefined)
        return res.status(401).json({flag:"USER NOT LOGGED IN!!"})
    const creatorID=req.query.creatorID
    if(creatorID===undefined||creatorID===null)
        return res.status(403).json({flag:"CREATOR INVALID!!"})
    const userObject=await jwtDecode(token)
    console.log(userObject)
    if(creatorID!==userObject.emailID)
        return res.status(401).json({flag:"EMAILID & SESSIONS MISMATCH!!"})
    const currentTime=getEpochDateTime();
    if(userObject.exp<=currentTime)
        return res.status(400).json({flag:"SESSION EXPIRED!!"}) 
    const roomID=v4();
    console.log(`Random ID :${roomID}`)
    if(await createRoomMongo(req.body,creatorID,roomID)==0||await createRoomRedis(creatorID,roomID,req.body.roomName)==0||await addUserToRoomRedis(roomID,creatorID)==0){
        return res.status(500).json({flag:"SERVER ERROR!!"})
    }
    return res.status(201).json({flag:"ROOM CREATED!!",roomID:roomID})
}