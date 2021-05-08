async function forgotPassword(){
    const emailID=document.getElementById('email').value.trim()
    const response=await axios.post('/api/forgotPassword',{emailID:emailID})
    
    if(response.status==200)
    {
        //alert(response.data.flag)
        M.toast({html: response.data.flag, classes: 'rounded green'});
    }
        if(response.status==401)
        {
            M.toast({html: response.data.flag, classes: 'rounded red'});
        }
           
}