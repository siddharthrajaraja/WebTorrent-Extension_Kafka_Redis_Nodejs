async function forgotPassword(){
    const emailID=document.getElementById('email').value.trim()
    const response=await axios.post('/api/forgotPassword',{emailID:emailID})
    
    if(response.status==200)
        alert(response.data.flag)
    if(response.status==401)
        {
            alert(response.data.flag)
        }
           
}