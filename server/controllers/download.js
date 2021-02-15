
const path =require('path')
exports.downloadFile=(req,res)=>{
    const newFilePath= path.join(__dirname+'../../../client/download.htm');
    res.sendFile(newFilePath)
}