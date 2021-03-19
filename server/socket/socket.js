let count=0;

module.exports=(server)=>{

    const optionsSocket={
        /*Any options to be added in future*/
    }
    const io=require('socket.io')(server,optionsSocket)
    
    io.on('connection',socket=>{
        
        console.log("Connected user")
        
        socket.on('change_name',(data)=>{
            console.log(data)
            socket.username=data.username
            console.log("New user :",socket.username)
            // this broadcasts message to everyone!
            io.sockets.emit('new_message',{message:"Thanks for connecting!!",username:socket.username})
        
        })
        
        socket.on('typing',(data)=>{
            // this broadcast message except selg
            socket.broadcast.emit('typing',{username:socket.username})
        })
        

    })

}