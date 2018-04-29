import express from 'express'
import taskCtrl from '../controllers/task'

const router = express.Router()
router.route('/')
    .get(taskCtrl.list)
    export default router