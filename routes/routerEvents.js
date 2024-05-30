const express = require('express');
const router = express.Router();
const { deleteEvent, updateEvent, createEvent, getAllEventos } = require('../controllers/eventController');
const { upload } = require('../controllers/uploadController');
// Rutas de Eventos
router.get('/all', getAllEventos); // Nueva ruta para obtener todos los eventos

// Crea un evento
router.post('/create-event', upload.single('imagen'), createEvent)

// Modifica un evento
router.post('/update-event/:eventID', upload.single('imagen'), updateEvent)

// Elimina un evento
router.post('/delete-event/:eventID', deleteEvent)

module.exports = router

