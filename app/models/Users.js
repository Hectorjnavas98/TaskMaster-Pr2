//modelo para interpretar la bbdd esto se debe de hacer por cada peticion que debemos de recoger.
const mongoose = require('mongoose');


// Modelo de Mongoose para Usuarios
const userSchema = new mongoose.Schema({
    _id: Object,
    name: String,  // Suponiendo que los documentos tienen un campo 'name'
    email: String,  // Suponiendo que los documentos tienen un campo 'email'
    password: String,
  });
  const User = mongoose.model('User', userSchema, 'users');

module.exports = {User}