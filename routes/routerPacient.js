const express = require('express');
const router = express.Router();
const {getAllPacients,createPacient,updatePacient,deletePacient} = require('../controllers/pacientController');
const { upload } = require('../controllers/uploadController');
// Obtener todos los pacientes
router.get('/all', getAllPacients);

// Crear un nuevo paciente
router.post('/create-pacient', upload.single('imagen'), createPacient);

// Modificar un paciente existente
router.post('/update-paciente/:pacienteID', upload.single('imagen'), updatePacient);

// Eliminar un paciente
router.post('/delete-paciente/:pacienteID', deletePacient);

module.exports = router;