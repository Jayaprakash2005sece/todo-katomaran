const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: String,
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
