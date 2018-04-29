import express from 'express'
import taskCtrl from '../controllers/task'

const router = express.Router()
router.route('/')
    .get(taskCtrl.list)
    .post(taskCtrl.create)
router.route('/:taskId')
    .put(taskCtrl.update)
    .delete(taskCtrl.remove)
    export default router