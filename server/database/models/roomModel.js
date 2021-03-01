const {roomSchema}=require('../schema/rooms')
const {mongoose}=require('../config/mongoConnect')
const RoomModel=mongoose.model('ROOMS',roomSchema)
module.exports={
    RoomModel:RoomModel
}