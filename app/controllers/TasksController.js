const Task = require('../models/Task');

// Obtener todas las tareas
exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//Crear una nueva tarea
  exports.createTask = async (req, res) => {
    const { title, description, status, panel } = req.body;
    const task = new Task({ title, description, status, panel });
    try {
      const newTask = await task.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Obtener una tarea por su ID
exports.getTaskById = async (req, res) => {
    const { taskId } = req.params;
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Actualizar una tarea por su ID
exports.updateTaskById = async (req, res) => {
    const { taskId } = req.params;
    const { title, description, status, panel } = req.body;
    try {
      const updatedTask = await Task.findByIdAndUpdate(taskId, { title, description, status, panel }, { new: true });
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(updatedTask);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Eliminar una tarea por su ID
exports.deleteTaskById = async (req, res) => {
    const { taskId } = req.params;
    try {
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json({ message: 'Task deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };