let {fileUpload}=require('../controllers/upload')
let {downloadFile}=require('../controllers/download')
let {connectSocket}=require('../controllers/connectSocket')

module.exports=(app)=>{
    app.get('/fileUpload',fileUpload);
    app.get('/downloadFile',downloadFile)
    app.get('/connectSocket',connectSocket)
}