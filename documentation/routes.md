## GET ROUTES :

- `/fileUpload` : This Route is used in the sender's end to upload a file.
- `/downLoadFile`: This Route is to download the uploaded file using magnetic URL generated.

* `/connectSocket` : This Route is to establish Socket Connection for mutiple users at `PORT : 8000`

* `/verifyEmail/:hashedEmail` : This is to check if veryEmail page has been expired.

```
RESPONSE :
    * status 200 : OK
    * status 440 : PAGE EXPIRED!!
    * status 500 : DATABASE ERROR!!
```

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
    * status 200 : OK
    * status 409 : USER ALREADY EXISTS!!
    * status 500 : DATABASE ERROR!!
    * status 500 : SERVER ERROR!!
```
