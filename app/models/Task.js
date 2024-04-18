const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['todo', 'in progress', 'done'], default: 'todo' },
  panel: { type: mongoose.Schema.Types.ObjectId, ref: 'Panel' }
});

module.exports = mongoose.model('Task', taskSchema);