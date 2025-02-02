const Task = require("../models/tasks")

const getAlltasks = async(req,res)=>{
    try {
        const tasks = await Task.find({}) //getting all the tasks
        res.status(200).json({tasks:tasks})
    } catch (error) {
        res.status(500).json9({msg:error} ) 
    }
}
const createTask = async(req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})    
    } catch (error) {
        res.status(500).json({msg:error})
    }   
    
}

const getTaskbyId = (req,res)=>{
    console.log("This is get task by id");
    res.send("get a task")
}

const updateTaskById = (req,res)=>{
    console.log("This is update task by id");
    res.send("update a task")
}

const deleteTaskById = (req,res)=>{
    console.log("this is delete task by id");
    res.send("delete a task")
}
module.exports = {
    getAlltasks,
    createTask,
    getTaskbyId,
    updateTaskById,
    deleteTaskById

}