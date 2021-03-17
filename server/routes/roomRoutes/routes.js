const {createRoom}=require('../../controllers/createRoom')
const {mailRoomID}=require('../../controllers/mailRoomID')
const {getRoomInfo}=require('../../controllers/roomInfo')
const {getAllRooms}=require('../../controllers/getAllRooms')
module.exports=(app,jsonParser)=>{
    //GET ROUTES
    app.get('/api/roomInfo',getRoomInfo)
    app.get('/api/getAllRooms',getAllRooms)
    //POST ROUTES
    app.post('/api/createRoom',jsonParser,createRoom)
    app.post('/api/mail-room-id',jsonParser,mailRoomID)
}