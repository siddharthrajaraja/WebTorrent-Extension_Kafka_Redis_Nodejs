const {smembers,setAddAsync}=require('../../config/redisConnect')
const {RoomModel}=require('../../models/roomModel')
exports.getRoomMembers=async(roomID)=>{
    const allMembers=await smembers(roomID)
    return allMembers
}

exports.getRoomMembersMongo=async(roomID)=>{
    const {members}=await RoomModel.findOne({
        groupID:roomID
    })
    return members
}

exports.updateRoomMembersToCache=async(roomID,members)=>{
    await setAddAsync(roomID+process.env.USERS,members)
}