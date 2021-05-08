async function updatePassword(){
    const urlParams = new URLSearchParams(window.location.search);
    const hashedEmail = urlParams.get('id');
    
    const userObject={
        emailID:document.getElementById('email').value.trim(),
        password:document.getElementById('password').value.trim(),
        id:hashedEmail
    }

    const response=await axios.post('/api/updatePassword',userObject)
    
    if(response.status==204)
    {
        //alert("UPDATED!!")
        M.toast({html: 'Updated', classes: 'rounded green',completeCallback:()=>{ window.location.href='/login' }});
    }
    else {
        M.toast({html:response.data.flag, classes:'rounded red'})
    }
    
}