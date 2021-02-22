const jwt=require('jsonwebtoken')
exports.jwtSign=async(payload)=>{
    const secret=process.env.JWT_SECRET
    const jwtOptions={
        expiresIn:process.env.JWT_EXPIRY
    }
    const token=await jwt.sign(payload,secret,jwtOptions)
    return token
}