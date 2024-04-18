const Panel = require('../models/Panel');

// Obtener todos los paneles
exports.getAllPanels = async (req, res) => {
    try {
      const panels = await Panel.find();
      res.json(panels);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Crear un nuevo panel
exports.createPanel = async (req, res) => {
    const { title, description } = req.body;
    const panel = new Panel({ title, description });
    try {
      const newPanel = await panel.save();
      res.status(201).json(newPanel);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Obtener un panel por su ID
exports.getPanelById = async (req, res) => {
    const { panelId } = req.params;
    try {
      const panel = await Panel.findById(panelId);
      if (!panel) {
        return res.status(404).json({ message: 'Panel not found' });
      }
      res.json(panel);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Actualizar un panel por su ID
exports.updatePanelById = async (req, res) => {
    const { panelId } = req.params;
    const { title, description } = req.body;
    try {
      const updatedPanel = await Panel.findByIdAndUpdate(panelId, { title, description }, { new: true });
      if (!updatedPanel) {
        return res.status(404).json({ message: 'Panel not found' });
      }
      res.json(updatedPanel);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Eliminar un panel por su ID
exports.deletePanelById = async (req, res) => {
    const { panelId } = req.params;
    try {
      const deletedPanel = await Panel.findByIdAndDelete(panelId);
      if (!deletedPanel) {
        return res.status(404).json({ message: 'Panel not found' });
      }
      res.json({ message: 'Panel deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };