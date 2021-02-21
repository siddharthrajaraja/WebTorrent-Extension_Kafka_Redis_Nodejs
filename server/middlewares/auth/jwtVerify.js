const jwt=require('jsonwebtoken')
exports.jwtVerify=async(token)=>{
    try{
        const secret=process.env.JWT_SECRET;
        await jwt.verify(token,secret)
        return 1;
    }
    catch(e){
        console.log(e)
        return 0;
    }
}