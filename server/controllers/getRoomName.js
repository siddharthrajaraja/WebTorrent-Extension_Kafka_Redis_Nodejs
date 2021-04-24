const {getRoomName} =require('../database/queries/roomQueries/getRoomName')
exports.getRoomName=async(req,res)=>{
    const serverName=await getRoomName(req.query['roomID'])
    res.status(200).json({flag:serverName})
}