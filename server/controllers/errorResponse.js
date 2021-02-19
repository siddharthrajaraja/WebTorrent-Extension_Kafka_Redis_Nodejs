exports.errorResponse=async(req,res)=>{
    res.status(404).json({flag:"NOT FOUND!!"})
}