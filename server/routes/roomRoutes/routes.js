const {createRoom}=require('../../controllers/createRoom')
const {mailRoomID}=require('../../controllers/mailRoomID')
const {roomMemberList}=require('../../controllers/roomMemberList')
const {getAllRooms}=require('../../controllers/getAllRooms')
const {addUserToRoom}=require('../../controllers/addUserToRoom')
const {getRoomName} =require('../../controllers/getRoomName')

module.exports=(app,jsonParser)=>{
    //GET ROUTES
    app.get('/api/getRoomMembers',roomMemberList)
    app.get('/api/getAllRooms',getAllRooms)
    app.get('/api/addUserToGroup',addUserToRoom)
    app.get('/api/getRoomName',getRoomName)
    //POST ROUTES
    app.post('/api/createRoom',jsonParser,createRoom)
    app.post('/api/mail-room-id',jsonParser,mailRoomID)
}