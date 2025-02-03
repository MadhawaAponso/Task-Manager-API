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

const getTaskbyId = async (req,res)=>{
    try {
        const task = await Task.findOne({_id: req.params.id });
        if(!task) return res.status(404).json({msg:"The task is not found"})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error}) 
    }
}

const updateTaskById = async (req,res)=>{
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true, //retuen update task
                runValidators : true //validate
            }
        )
        if(!task) return res.status(404).json({msg:"The item is not available"})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error})
        
    }
}

const deleteTaskById = async(req,res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) return res.status(404).json({msg:"The task is not available"})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error})
    }
}
module.exports = {
    getAlltasks,
    createTask,
    getTaskbyId,
    updateTaskById,
    deleteTaskById

}