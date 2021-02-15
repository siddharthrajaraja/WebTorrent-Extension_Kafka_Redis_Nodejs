const { type } = require('os');
const path =require('path')
exports.fileUpload=(req,res)=>{
    const newFilePath= path.join(__dirname+'../../../client/upload.htm');
    res.sendFile(newFilePath)
}