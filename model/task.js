const mongoose = require('mongoose')
const schema = mongoose.Schema

const taskSchema = new schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: false
    },
    deadline: {
        type: Date,
        required: true
    },
    author: [{
        type: mongoose.Schema.Types.ObjectId, // referenciando o autor da task
        ref: 'User'
    }]
})

const taskModel = mongoose.model('tasks', taskSchema)
module.exports = taskModel