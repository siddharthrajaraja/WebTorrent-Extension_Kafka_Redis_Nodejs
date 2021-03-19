/* 
    let userObj={
        "firstName":"xxxx",
        "lastName":"yyyy",
        "emailID":"xxx@gmail.com",
        "password":"xxxxxxxx"
    }
*/

const {registerUser}=require('../database/queries/authQueries/registerUser')
const md5=require("md5")
const {getUserLoggedIn}=require('../database/queries/authQueries/getUserLoggedIn')
const {jwtSign}=require('../middlewares/auth/jwtSign')
exports.register=async(req,res)=>{
    try{
        const stat=await registerUser(req.body)
        if(stat==1)
            return res.status(201).json({flag:"SUCCESSFULLY REGISTERED!! Please check your registered EmailID for verification!!"});
        else if(stat==-1)
            return res.status(409).json({flag:"USER ALREADY EXISTS!!"})
        return res.status(500).json({flag:"DATABASE ERROR!!"})
    }
    catch(e){
        console.log(e)
        return res.status(500).json({flag:"SERVER ERROR!!"})
    }
}

exports.login=async(req,res)=>{
    req.body.password=md5(req.body.password)
    const userDetails=await getUserLoggedIn(req.body)
    if(userDetails===null)
        return res.status(400).json({flag:"USER NOT FOUND!!"})
    if(userDetails.isEmailVerified===false)
        return res.status(202).json({flag:"EMAIL NOT VERIFIED!!"})
    const {firstName,lastName}=userDetails
    req.body.firstName=firstName
    req.body.lastName=lastName
    const token=await jwtSign(req.body)
    res.cookie(process.env.JWT_TOKEN,token)
    return res.status(201).json({flag:"LOGGED IN!!",token})
}