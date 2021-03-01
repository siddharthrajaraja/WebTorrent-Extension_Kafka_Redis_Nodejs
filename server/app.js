const express =require('express')
const app=express()
const dotenv=require('dotenv').config()
const jsonParser=require('body-parser').json()
const cors =require('cors')

app.use(cors())
require('./routes/roomRoutes/routes')(app,jsonParser)
require('./routes/routes')(app,jsonParser)

const server=app.listen(process.env.NODE_SERVER,()=>{
    console.log(`Connected to server: ${process.env.NODE_SERVER}`)
})

require('./socket/socket')(server)
