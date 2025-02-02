const express = require('express')
const{getAlltasks,createTask , getTaskbyId , deleteTaskById , updateTaskById} = require("../controllers/task_controller")

const router = express.Router()

router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getTaskbyId).patch(updateTaskById).delete(deleteTaskById)

module.exports = router
