exports.serverConn=async(req,res)=>{
    return res.status(200).json({flag:"Server Connected!!"})
}