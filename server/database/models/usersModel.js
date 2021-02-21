const {userSchema}=require('../schema/users')
const {mongoose}=require('../config/mongoConnect')
const UserModel=mongoose.model('Users',userSchema)
module.exports={
    UserModel:UserModel
}