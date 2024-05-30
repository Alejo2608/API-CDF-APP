const Paciente = require('../models/Pacients.js');
const Users = require('../models/Users')
const { uploadImagePacient, deleteImage } = require('../utils/cloudinary');  // Asumiendo que tienes funciones similares para manejar imágenes
const fs = require('fs-extra');

// Obtener todos los pacientes
const getAllPacients = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Crear un nuevo paciente
const createPacient = async (req, res) => {
  console.log(req)
  try {
    if (!req.file) return res.status(404).json({ messageError: 'Debes agregar una imagen del paciente' });
    const { path } = req.file;
    const { nombre, necesidad, enfermedad, diagnostico } = req.body;

    let paciente = new Paciente({ nombre, necesidad, enfermedad, diagnostico });

    if (path) {
      const result = await uploadImagePacient(path);
      await fs.unlink(path);
      paciente.imagen = { public_id: result.public_id, secure_url: result.secure_url };
    }

    await paciente.save();
    return res.status(200).json({ paciente });
  } catch (error) {
    return res.status(500).json({ messageError: error.message });
  }
};

// Editar un paciente existente
const updatePacient = async (req, res) => {
  try {
    let path;
    if (req.file) {
      path = req.file.path;
    }

    const { pacienteID } = req.params;
    const update = req.body;

    if (path !== undefined) {
      let paciente = await Paciente.findById(pacienteID);
      await deleteImage(paciente.imagen.public_id);
      const result = await uploadImagePacient(path);
      await fs.unlink(path);
      update.imagen = { public_id: result.public_id, secure_url: result.secure_url };
      paciente = await Paciente.findByIdAndUpdate(pacienteID, update, { new: true });
      return res.status(200).json({ paciente });
    }

    const paciente = await Paciente.findByIdAndUpdate(pacienteID, update, { new: true });
    return res.status(200).json({ paciente });
  } catch (error) {
    return res.status(500).json({ messageError: error.message });
  }
};

// Eliminar un paciente
const deletePacient = async (req, res) => {
  try {
    const { pacienteID } = req.params;
    const paciente = await Paciente.findByIdAndDelete(pacienteID);

    if (!paciente) return res.status(404).json({ messageError: 'Paciente no encontrado' });

    await deleteImage(paciente.imagen.public_id);
    res.status(200).json({ eliminado: true });
  } catch (error) {
    return res.status(500).json({ messageError: error.message });
  }
};

module.exports = {
  getAllPacients,
  createPacient,
  updatePacient,
  deletePacient
};