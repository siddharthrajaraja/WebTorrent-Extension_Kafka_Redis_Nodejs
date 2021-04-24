const {RoomModel} = require('../../models/roomModel')

exports.getRoomName=async(roomID)=>{
    const data=await RoomModel.findOne(
        {
            groupID:roomID
        }
    )
    //console.log("I am here :",data)
    return data.groupName
}