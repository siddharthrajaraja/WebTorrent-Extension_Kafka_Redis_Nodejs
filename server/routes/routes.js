let {fileUpload}=require('../controllers/upload')
let {downloadFile}=require('../controllers/download')
module.exports=(app)=>{
    app.get('/fileUpload',fileUpload);
    app.get('/downloadFile',downloadFile)
}