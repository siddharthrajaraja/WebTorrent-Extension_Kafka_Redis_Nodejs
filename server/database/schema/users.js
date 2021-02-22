const {mongoose}=require('../config/mongoConnect')
const {Schema}=mongoose

const userSchema=new Schema({
    "firstName":String,
    "lastName":String,
    "emailID":String,
    "password":String,
    "isEmailVerified":Boolean,
    "hashedEmail":String
});

module.exports={
    userSchema:userSchema
}