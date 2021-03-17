const {RoomModel}=require('../../models/roomModel')
exports.refreshAllRooms=async({emailID})=>{
    try{
        const data=await RoomModel.find({
            creatorID:emailID
        }).exec()
        console.log(data)
        return data
    }
    catch(e){
        console.log(e)
        return {};
    }
}