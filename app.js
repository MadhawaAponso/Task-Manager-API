const express = require('express')
app = express()
const task = require("./routes/task")
const connectDB = require('./db/connect')
require('dotenv').config()

const PORT = 5000
app.use(express.static('./public'))
app.use(express.json())

app.use("/api/v1/task" , task)

const start = async()=>{
    try {
        await connectDB(process.env.MONGO)
        app.listen(PORT , ()=>{
            console.log(`Port is ${PORT}`);
        })
    } catch (error) {
        console.log(error)    
    }
}
start()

