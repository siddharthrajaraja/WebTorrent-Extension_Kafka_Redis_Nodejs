async function register(){

    const userObject={
        firstName:document.getElementById('firstname').value.trim(),
        lastName:document.getElementById('lastname').value.trim(),
        emailID:document.getElementById('email').value.trim(),
        password:document.getElementById('password').value.trim()
    }

    const response=await axios.post('/api/register',userObject)
    console.log(response)

    if(response.status==201){
        // OK
        alert(response.data.flag)
        window.location.href='/login'
    }
    else if(response.status==200){
        alert("User Exists")
    }
    else if(response.status==500){
        alert("Server Error!")
    }
    else{
        alert("Database Error")
    }
}
