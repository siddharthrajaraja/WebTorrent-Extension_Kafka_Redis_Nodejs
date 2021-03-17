const {RoomModel}=require('../../models/roomModel')
const {addUserToRoomRedis}=require('../redisQueries/addUserToRoom')
exports.addUserToRoomMongoCreateCache=async(roomID,emailID)=>{
    try{
        console.log(roomID,emailID)
        await RoomModel.updateOne({
            groupID:roomID
        },{
            $push:{
                members:emailID
            }
        })
        
        const {members}=await RoomModel.findOne({
            groupID:roomID
        })

        members.forEach(async(element) => {
           await addUserToRoomRedis(roomID,element)
        });

        return 1;
    }
    catch(e){
        console.log(e)
        return 0;
    }
}


