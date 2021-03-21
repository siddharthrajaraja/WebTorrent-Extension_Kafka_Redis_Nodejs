const {jwtDecode}=require('../middlewares/auth/jwtDecode')
const {getToken}=require('../middlewares/auth/getToken')
const {getEpochDateTime}=require('../middlewares/EpochDateTime/getEpochDateTime')
const {getRoomMembers,getRoomMembersMongo,updateRoomMembersToCache}=require('../database/queries/roomQueries/getRoomMembers')

exports.roomMemberList=async(req,res)=>{
    const cookies=req.get('cookie');
    const token=getToken(cookies)
    if(token===null||token===undefined)
        return res.status(403).json({flag:"USER NOT LOGGED IN!!"})
    const userObject=await jwtDecode(token)
    const currentTime=getEpochDateTime();
    if(userObject.exp<=currentTime)
        return res.status(400).json({flag:"SESSION EXPIRED!!"}) 
    const {roomID}=req.query
    let roomMembers=await getRoomMembers(roomID)
    if(roomMembers.length===0||roomMembers===null||roomMembers===[])
    {   
        roomMembers=await getRoomMembersMongo(roomID)
        await updateRoomMembersToCache(roomID,roomMembers)
    }
    return res.status(200).json({flag:"Done!!","roomMembers":roomMembers})    
}