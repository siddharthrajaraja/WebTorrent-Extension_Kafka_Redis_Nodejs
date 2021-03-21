const express =require('express')
const app=express()
const dotenv=require('dotenv').config()
const jsonParser=require('body-parser').json()
const cors =require('cors')
const cookieParser=require('cookie-parser')

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', ['Content-Type','Authorization']);
    next();
});
app.use(cookieParser())
app.use(cors(corsOptions))

require('./routes/roomRoutes/routes')(app,jsonParser)
require('./routes/routes')(app,jsonParser)

const server=app.listen(process.env.NODE_SERVER,()=>{
    console.log(`Connected to server: ${process.env.NODE_SERVER}`)
})

require('./socket/socket')(server)
