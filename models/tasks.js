const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name : {
        type :String,
        required : [true , "Name is reqquired"],
        trim : true,
        maxlength:[20,"Max length is 20 characters"]
    } ,
    completed : {
        type :Boolean,
        default:false
    }
})
const Task = mongoose.model("Task",taskSchema)

module.exports = Task