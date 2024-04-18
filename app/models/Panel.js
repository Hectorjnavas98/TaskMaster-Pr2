const mongoose = require('mongoose');

const panelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = mongoose.model('Panel', panelSchema);