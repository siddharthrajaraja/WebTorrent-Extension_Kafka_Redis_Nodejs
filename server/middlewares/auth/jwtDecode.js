const jwt=require('jsonwebtoken')
exports.jwtDecode=async(token)=>{
    try{
        const secret=process.env.JWT_SECRET;
        const decoded= await jwt.decode(token,secret)
        //console.log(decoded)
        return decoded;
    }
    catch(e){
        console.log(e)
        return {};
    }
}