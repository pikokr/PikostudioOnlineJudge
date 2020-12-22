import mongoose, { Document } from 'mongoose'

interface UserType extends Document {
  id: string
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
})

export default mongoose.model<UserType>('User', schema, 'users')
