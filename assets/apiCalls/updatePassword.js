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
        alert("UPDATED!!")
        window.location.href='/login'
    }
    else alert(response.data.flag)
    
}