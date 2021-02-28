const {jwtDecode}=require('../middlewares/auth/jwtDecode')
const {getEpochDateTime}=require('../middlewares/EpochDateTime/getEpochDateTime')
const {getToken}=require('../middlewares/auth/getToken')

exports.authenticateUser=async(req,res)=>{
    const cookies=req.get('cookie');
    const token=getToken(cookies)
    if(token===null||token===undefined)
        return res.status(403).json({flag:"USER NOT LOGGED IN!!"})
    //console.log("Cookie is :",token)
    const userObj=await jwtDecode(token)
    const currentTime=getEpochDateTime();
    if(userObj.exp<=currentTime)
        return res.status(400).json({flag:"SESSION EXPIRED!!"}) 
    return res.status(200).json({flag:"AUTHENTICATED!!",userObj})
}