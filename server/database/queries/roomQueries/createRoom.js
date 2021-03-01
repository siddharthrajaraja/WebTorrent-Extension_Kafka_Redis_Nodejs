const {RoomModel}=require('../../models/roomModel')
exports.createRoomMongo=async({roomName},emailID,roomID)=>{
    try{
        console.log(`ROOMNAME :${roomName} CREATORID:${emailID}`)   
        const dataObj={
            "groupID":roomID,
            "groupName":roomName,
            "creatorID":emailID,
            "creationTimestamp":new Date().valueOf(),
            "members":[emailID]
        }
        const data=await RoomModel.create(dataObj);
        console.log("Room Created :",data);
        return 1;
    }
    catch(e){
        console.log(e)
        return 0;
    }
}