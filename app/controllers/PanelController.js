const mongoose = require('mongoose');
const Panel = require('../models/Panel');
const Task = require('../models/Task');

// Obtener todos los paneles
exports.getAllPanels = async (req, res) => {
    try {
      const panels = await Panel.find().populate('tasks'); // Utilizar populate para obtener las tareas asociadas a cada panel
      res.json(panels);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Obtener un panel por su ID
exports.getPanelById = async (req, res) => {
    const { panelId } = req.params;
    try {
      const panel = await Panel.findById(panelId).populate('tasks'); // Utilizar populate para obtener las tareas asociadas al panel
      if (!panel) {
        return res.status(404).json({ message: 'Panel not found' });
      }
      res.json(panel);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };