const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = new Schema({

    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("task", taskSchema);