import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import routes from './routes/index'
const PORT = process.env.PORT
const app = express()
// app.get('*', (req, res , next)=>{
//     res.json({message: `it's work`})
// })
app.use('/api',routes)
app.listen(PORT,() => {
    console.log(`server is running on ${PORT}.`)
})

export default app