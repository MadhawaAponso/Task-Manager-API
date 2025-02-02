const getAlltasks = (req,res)=>{
    res.send("This is the tasks page")
}
const createTask = (req,res)=>{
    console.log("This is the task");
    res.send("create task")
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