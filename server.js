import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Promise from 'bluebird'
import express from 'express'
import routes from './routes/index'

mongoose.Promise = Promise
dotenv.config()
const PORT = process.env.PORT
const MONGO_DB = process.env.MONGO_DB
const app = express()
mongoose.connect(MONGO_DB, {
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 50, // Maintain up to 10 socket connections
    promiseLibrary: Promise,
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
})
mongoose.connection.once('open', () => {
    console.log(`mongodb is connected!`)
})
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: `)
})

// app.get('*', (req, res , next)=>{
//     res.json({message: `it's work`})
// })
app.use(bodyParser.json({
    limit: '10mb'
}))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/api', routes)
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}.`)
})

export default app