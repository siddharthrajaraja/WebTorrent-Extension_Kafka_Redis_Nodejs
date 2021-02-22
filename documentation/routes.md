## GET ROUTES :

- `/fileUpload` : This Route is used in the sender's end to upload a file. (DEMO)
- `/downLoadFile`: This Route is to download the uploaded file using magnetic URL generated. (DEMO)

* `/connectSocket` : This Route is to establish Socket Connection for mutiple users at `PORT : 8000` (DEMO)

* `/verifyEmail/:hashedEmail` : This is to check if veryEmail page has been expired.

```
RESPONSE :
    * status 200 : OK
    * status 440 : PAGE EXPIRED!!
    * status 500 : DATABASE ERROR!!
```

- `/authenticate/user` : This is to check if logged in User's Session has not been expired!

```
RESPONSE :
    * status 200 : OK
    * status 400 : SESSION EXPIRED!!
```

* `/resend-email-verification-link?emailID=xxxxx@gmail.com` :  This is to resend the email verification link whenever the email link expires.

```
REQUEST : comprises of Query string which contains the Email ID of the user, who request to resend email verification link. 
```
*Note : The request Query string will be fetched from the URL currently being sent from the [verificationmail.js](../server/email/verificationmail.js) file. This Query string will never be altered so the text field redering emailID from query string need to be uneditable.*

## POST ROUTES :

- `/api/register` : This Route is meant to register user details who is new in the system. It takes a payload :

```
REQUEST BODY :

    let userObj=
        {
            "firstName":"xxxx",
            "lastName":"yyyy",
            "emailID":"xxx@gmail.com",
            "password":"xxxxxxxx"
        }

RESPONSE :
    * status 201 : OK
    * status 409 : USER ALREADY EXISTS!!
    * status 500 : DATABASE ERROR!!
    * status 500 : SERVER ERROR!!
```

- `/api/login` : This is to login user after Email Verification.

```
REQUEST BODY :
    {
        "emailID": "xxxxx@gmail.com",
        "password": "XXXxxYYY"
    }

RESPONSE :
    * status 400 : USER NOT FOUND!!
    * status 202 : EMAIL NOT VERIFIED
    * status 201 : LOGGED IN!!
```

* `/api/updatePassword` : This is to update the Password of Registered user!!
```
REQUEST BODY :
    {
        "emailID": "xxxxx@gmail.com",
        "password": "XXXxxYYY"
    }
RESPONSE :
    * status 200 : OK
    * status 400 : USER NOT REGISTERED!!    
```

* `/api/forgotPassword` : This is to request Forgot Password Email Link!! This link redirects to REACT SERVER later.
```
REQUEST BODY :
    {
        "emailID": "xxxx@gmail.com"
    }
```