const {serverConn}=require('../controllers/serverConn')
const {fileUpload}=require('../controllers/upload')
const {downloadFile}=require('../controllers/download')
const {connectSocket}=require('../controllers/connectSocket')
const {register,login}=require('../controllers/auth')
const {verifyEmail}=require('../controllers/verifyEmail')
const {errorResponse}=require('../controllers/errorResponse')
const {authenticateUser}=require('../controllers/authenticateUserJWT')
const {updatePassword}=require('../controllers/updatePassword')
const {resendEmailVerificationLink}=require('../controllers/resendEmailVerificationLink')
const {forgotPassword}=require('../controllers/forgotPassword')
module.exports=(app,jsonParser)=>{
    // GET ROUTES!!
    app.get('/',serverConn)
    app.get('/fileUpload',fileUpload);
    app.get('/downloadFile',downloadFile)
    app.get('/connectSocket',connectSocket)
    app.get('/verifyEmail/:hashedEmailID',verifyEmail)
    app.get('/authenticate/user',authenticateUser)
    app.get('/resend-email-verification-link',resendEmailVerificationLink)
    app.get('*',errorResponse)
    // POST ROUTES!!
    app.post('/api/register',jsonParser,register)
    app.post('/api/login',jsonParser,login)
    app.post('/api/updatePassword',jsonParser,updatePassword)
    app.post('/api/forgotPassword',jsonParser,forgotPassword)

}