const {jwtDecode}=require('../middlewares/auth/jwtDecode')
const {getEpochDateTime}=require('../middlewares/EpochDateTime/getEpochDateTime')
exports.getToken=(cookie)=>{
    const allCookies=cookie.split(';')
    for(let index=0;index<allCookies.length;index++){
        const completeCookie=allCookies[index].split('=')
        const cookieKey=completeCookie[0].trim()
        const cookieValue=completeCookie[1].trim()
        if(cookieKey===process.env.JWT_TOKEN){
            return cookieValue
        }
    }
}

exports.authenticateUser=async(req,res)=>{
    const cookies=req.get('cookie');
    const token=this.getToken(cookies)
    //console.log("Cookie is :",token)
    const userObj=await jwtDecode(token)
    const currentTime=getEpochDateTime();
    if(userObj.exp<=currentTime)
        return res.status(400).json({flag:"SESSION EXPIRED!!"}) 
    return res.status(200).json({flag:"AUTHENTICATED!!",userObj})
}