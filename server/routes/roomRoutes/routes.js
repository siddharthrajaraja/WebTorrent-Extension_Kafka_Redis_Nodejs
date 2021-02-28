const {createRoom}=require('../../controllers/createRoom')
module.exports=(app,jsonParser)=>{
    app.post('/api/createRoom',jsonParser,createRoom)
}