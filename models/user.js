const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  name: {
    type: 'string',
    required: true
  },
  email: {
    type: 'string',
    required: true
  },
  password: {
    type: 'string',
    required: true
  },
  createAt: {
    type: 'date',
    default: Date.new
  }
})

module.exports = mongoose.model('User', userSchema)