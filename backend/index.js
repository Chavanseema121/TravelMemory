const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
PORT = process.env.PORT
const conn = require('./conn')
app.use(express.json())
app.use(cors())

const tripRoutes = require('./routes/trip.routes')

app.use('/trip',tripRoutes);  // http://localhost:3000/trip --> post/get/get by ID

app.get('/hello',(req,res)=>{
    res.send('hello world!')

})
app.listen(5000,()=>{
    console.log(`sever started at http://localhost:5000`)
})