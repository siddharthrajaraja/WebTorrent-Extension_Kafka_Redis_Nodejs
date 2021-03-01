const {mongoose}=require('../config/mongoConnect')
const {Schema}=mongoose


const roomSchema=new Schema({
    "groupID":String,
    "groupName":String,
    "creatorID":String,
    "creationTimestamp":Number,
    "members":[String]
});

module.exports={
    roomSchema:roomSchema
}