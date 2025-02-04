const express = require('express')
app = express()
const task = require("./routes/task")
const connectDB = require('./db/connect')
const notFound = require('./middleware/notFound')
require('dotenv').config()

const PORT = 5000
//middlewares
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use("/api/v1/task" , task)

//Notfound
app.use(notFound)


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

