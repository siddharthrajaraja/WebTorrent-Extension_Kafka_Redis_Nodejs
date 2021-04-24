// This adds the using after authorizing in the specific roomID
// Adds to monogoDB and redis cache
const {jwtDecode}=require('../middlewares/auth/jwtDecode')
const {getEpochDateTime}=require('../middlewares/EpochDateTime/getEpochDateTime')
const {getToken}=require('../middlewares/auth/getToken')
const {addUserToRoomMongoCreateCache}=require('../database/queries/roomQueries/addUserToRoomCreateCache')
const {userExistsInRoomRedis}=require('../database/queries/redisQueries/checkUserInRoom')
exports.addUserToRoom=async(req,res)=>{
    console.log("Query :",req.query)
    const {emailID,roomID}=req.query
    const cookies=req.get('cookie');
    const token=getToken(cookies)
    if(token===null||token===undefined)
        return res.status(403).json({flag:"USER NOT LOGGED IN!!"})
    //console.log("Cookie is :",token)
    const userObj=await jwtDecode(token)
    const currentTime=getEpochDateTime();
    if(userObj.exp<=currentTime)
        return res.status(400).json({flag:"SESSION EXPIRED!!"}) 
    
    if(await userExistsInRoomRedis(roomID,emailID)){
        return res.status(409).json({"flag":emailID+" already exists!!"})
    }
    console.log("\nhere\n")
    console.log(await addUserToRoomMongoCreateCache(roomID,emailID))

    res.status(200).json({"flag":`${emailID} added to room!!`})
}