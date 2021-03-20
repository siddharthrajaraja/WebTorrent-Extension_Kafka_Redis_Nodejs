const {jwtDecode}=require('../middlewares/auth/jwtDecode')
const {getToken}=require('../middlewares/auth/getToken')
const {getEpochDateTime}=require('../middlewares/EpochDateTime/getEpochDateTime')

exports.roomMemberList=async(req,res)=>{
    const cookies=req.get('cookie');
    const token=getToken(cookies)
    if(token===null||token===undefined)
        return res.status(401).json({flag:"USER NOT LOGGED IN!!"})
    const userObject=await jwtDecode(token)
    const currentTime=getEpochDateTime();
    if(userObject.exp<=currentTime)
        return res.status(400).json({flag:"SESSION EXPIRED!!"}) 
    
    console.log(req.query)
    return res.status(200).json({flag:"Done!!"})    
}