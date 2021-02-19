let {fileUpload}=require('../controllers/upload')
let {downloadFile}=require('../controllers/download')
let {connectSocket}=require('../controllers/connectSocket')
let {register,login}=require('../controllers/auth')
let {verifyEmail}=require('../controllers/verifyEmail')
let {errorResponse}=require('../controllers/errorResponse')
module.exports=(app,jsonParser)=>{
    // GET ROUTES!!
    app.get('/fileUpload',fileUpload);
    app.get('/downloadFile',downloadFile)
    app.get('/connectSocket',connectSocket)
    app.get('/verifyEmail/:hashedEmailID',verifyEmail)
    app.get('*',errorResponse)
    // POST ROUTES!!
    app.post('/api/register',jsonParser,register)
    app.post('/api/login',jsonParser,login)
}