exports.getToken=(cookie)=>{
    try{
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
    catch(e){
        return null;
    }
    
}