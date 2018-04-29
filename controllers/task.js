import httpStatus from 'http-status'
import Task from '../model/task'
const list = (req,res,next)=>{
    Task.find({}).then((tasks) => {
        res.json({ tasks })
      }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({})
      })
}

const create = (req,res,next)=>{
    const { message } = req.body
    Task.create({message}).then((task) => {
        res.json({ task })
      }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({})
      })
    }

const update = (req,res,next)=>{
    const {complete} = req.body
    const { taskId } = req.params
    Task.findByIdAndUpdate(taskId,{complete}).then((task) => {
        res.json({ task })
      }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({})
      })
}
const remove = (req,res,next)=>{
    const { taskId } = req.params
    Task.findByIdAndRemove(taskId).then((task) => {
        res.json({ Success : true })
      }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({})
      })
}


export default{
    list,
    create,
    update,
    remove
}