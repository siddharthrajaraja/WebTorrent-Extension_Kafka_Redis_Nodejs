const {serverConn}=require('../controllers/serverConn')
const {fileUpload}=require('../controllers/upload')
const {downloadFile}=require('../controllers/download')
const {connectSocket}=require('../controllers/connectSocket')
const {register,login}=require('../controllers/auth')
const {verifyEmail}=require('../controllers/verifyEmail')
const {errorResponse}=require('../controllers/errorResponse')
module.exports=(app,jsonParser)=>{
    // GET ROUTES!!
    app.get('/',serverConn)
    app.get('/fileUpload',fileUpload);
    app.get('/downloadFile',downloadFile)
    app.get('/connectSocket',connectSocket)
    app.get('/verifyEmail/:hashedEmailID',verifyEmail)
    app.get('*',errorResponse)
    // POST ROUTES!!
    app.post('/api/register',jsonParser,register)
    app.post('/api/login',jsonParser,login)
}