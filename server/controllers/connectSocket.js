
const path =require('path')
exports.connectSocket=(req,res)=>{
    const newFilePath= path.join(__dirname+'../../../client/socket.htm');
    res.sendFile(newFilePath)
}