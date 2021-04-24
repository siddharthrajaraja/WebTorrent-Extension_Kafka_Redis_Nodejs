const {RoomModel}=require('../../models/roomModel')
const {addUserToRoomRedis}=require('../redisQueries/addUserToRoom')
const {createRoomRedis}=require('../redisQueries/createRoom')
const {getRoomName} =require('../roomQueries/getRoomName')
exports.addUserToRoomMongoCreateCache=async(roomID,emailID)=>{
    try{
        console.log(roomID,emailID)
        const data=await RoomModel.updateOne({
            groupID:roomID
        },{
            $push:{
                members:emailID
            }
        })

        console.log(data)
        

        const {members}=await RoomModel.findOne({
            groupID:roomID
        })
        
        const roomName=await getRoomName(roomID)

        await createRoomRedis(emailID,roomID,roomName)
        console.log("members :",members)
        
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


