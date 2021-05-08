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
        //alert(response.data.flag)
        M.toast({html: response.data.flag, classes: 'rounded green', completeCallback: ()=>{window.location.href='/login'}});
        
    }
    else if(response.status==200){
        //alert("User Exists")
        M.toast({html: 'User Exists', classes: 'rounded red'});
    }
    else if(response.status==500){
        //alert("Server Error!")
        M.toast({html: 'Server Error!', classes: 'rounded red'});
    }
    else{
        //alert("Database Error")
        M.toast({html: 'Database Error', classes: 'rounded red'});
    }
}
