async function login(){
    const userObject={
        emailID:document.getElementById('email').value.trim(),
        password:document.getElementById('password').value.trim()
    }
    console.log(userObject)

    axios.post('/api/login', userObject)
    .then(function (response) {
        console.log(response);
        if(response.status==200)
        {
            window.location.href = "/main";
        }
        else
        {
            console.log('Response Else');
        }
      
    })
    .catch(function (error) {
      console.log("Error: ",error);
    });

    
    

}