async function login(){
    const userObject={
        emailID:document.getElementById('email').value.trim(),
        password:document.getElementById('password').value.trim()
    }
    console.log(userObject)
    const response=await axios.post('/api/login',userObject)
    console.log(response)

    if(response.status==200){
        alert(response.data.flag)
        window.location.href='/main'
    }
    else{
        alert(response.data.flag)
   }

}