import mongoose, { Document } from 'mongoose'

interface UserType extends Document {
  id: string
  password: string
  salt: string
  admin: boolean
}

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model<UserType>('User', schema, 'users')
