import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

interface ProblemType extends Document {
  id: string
  description: string
  testCases: {
    input: string
    output: string
  }[]
  examples: {
    input: string
    output: string
  }[]
}

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  testCases: {
    type: Array,
    required: true
  },
  examples: {
    type: Array,
    required: true
  }
})

export default mongoose.model<ProblemType>('Problems', schema, 'problem')
