## GET ROUTES :

- `/fileUpload` : This Route is used in the sender's end to upload a file. (DEMO)
- `/downLoadFile`: This Route is to download the uploaded file using magnetic URL generated. (DEMO)

* `/connectSocket` : This Route is to establish Socket Connection for mutiple users at `PORT : 8000` (DEMO)

* `/verifyEmail/:hashedEmail?email=xxxx@gmail.com` : This is to check if veryEmail page has been expired.

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
    * status 403 : USER NOT LOGGED IN!!
```

* `/resend-email-verification-link?emailID=xxxxx@gmail.com` :  This is to resend the email verification link whenever the email link expires.

```
REQUEST : comprises of Query string which contains the Email ID of the user, who request to resend email verification link. 
```
*Note : The request Query string will be fetched from the URL currently being sent from the [verificationMail.js](../server/email/verificationMail.js) file. This Query string will never be altered so the text field redering emailID from query string need to be uneditable.*

* `/api/getAllRooms?emailID=siddharthraja9849@gmail.com` : this is to get all rooms with with user with `emailID` is associated with.

*Note : Check wheter cache is being updated or not you can see in flag returned from RESPONSE , use flush all command in redis to flush all keys of redis.* 

```
RESPONSE :
    * status 200 : OK
    Additional Paramters :
        * allRooms: [
            {
                "roomName" : String,
                "roomID" : String
            }
        ]
```

* `/api/addUserToGroup?emailID=xxxx@gmail.com&roomID=9bc1249d-4d91-4d74-bef2-18c08a307bab` : this is to add a user who accepts invites in their emailIDs to a specific roomID , updates the cache if the user is not present in the room.

```
RESPONSE :

    * status 403 : USER NOT LOGGED IN!!
    * status 400 : SESSION EXPIRED!!
    * status 409 : xxxx@gmail.com already exists!! 
    * status 200 : xxxx@gmail.com added to room!!
```

* `/api/roomMemberList` : pending!!



***

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
* `/api/createRoom?creatorID=xxxx@gmail.com` : This is to create a new room initiated by creatorID.
```
REQUEST BODY :
    {
        "roomName":"sample"
    }
RESPONSE :
    * status 201 : ROOM CREATED 
      
      Additional Parameters : 
        roomID : String
    
    * status 401 : USER NOT LOGGED IN!!
    * status 403 : CREATOR INVALID!!
    * status 401 : EMAILID && SESSION MISMATCH!!
    * status 400 : SESSION EXPIRED!!
    * status 500 : SERVER ERROR!!
```
* `/api/mail-room-id` : this is to mail roomIDs to all emailIDs specified to invite users into created group.
```
REQUEST BODY : 
    {
        "emailIDs":["siddharthraja9849@gmail.com","anitaraja.1994@gmail.com","shrivastavaman171@gmail.com","avengeramulya@gmail.com"],
        "roomID":"018e50e2-333b-4a4d-80c6-ddf0ac24978e"
    }
RESPONSE :  
    * status 200 : OK
```


