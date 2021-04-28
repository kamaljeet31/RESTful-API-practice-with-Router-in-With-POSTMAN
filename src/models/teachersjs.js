import mongoose from 'mongoose'
import validator from 'validator'

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email is already present'],
    Validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email')
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Teacher', teacherSchema)
