const {setexAsync,ttlAsync}=require('../../config/redisConnect')

exports.setEmailExpiration=async(hashedEmailID,userID)=>{

    try{
        const exprTime=parseInt(process.env.REDIS_EMAIL_EXPIRATION)
        const value=String(userID)
        const key=hashedEmailID
        await setexAsync(key,exprTime,value)
        return 1;
    }
    catch(e){
        console.log(e)
        return 0;
    }

}

exports.isEmailExpired=async(hashedEmailID)=>{

    try{
        const res=await ttlAsync(hashedEmailID)
        
        if(res==-2){
            return 0;
        }
        return 1;
        
    }
    catch(e){
        console.log(e);
        return 0;
    }



}