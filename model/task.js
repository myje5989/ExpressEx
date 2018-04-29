import mongoose, { Schema } from 'mongoose'
const taskSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    required: true,
    default: false,
  }
})
export default mongoose.model(`Task`, taskSchema)