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

exports.register=async(req,res)=>{
    try{
        const stat=await registerUser(req.body)
        if(stat==1)
            return res.status(200).json({flag:"SUCCESSFULLY REGISTERED!! Please check your registered EmailID for verification!!"});
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
    req.body.isEmailVerified=true
    /*try{
        
    }
    catch(e){

    }*/
    console.log(req.body)
    return res.status(200).json({flag:"Logged In!!"})
}