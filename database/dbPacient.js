const Paciente = require('../models/Pacients');
require('dotenv').config();

function addPacients() {
   Paciente.insertMany([
      {
         nombre: 'Juan Perez',
         imagen: {
            public_id: 'PotionsImage/1687909311972-Speedcola',
            secure_url: 'https://res.cloudinary.com/dtne2vbok/image/upload/v1687909302/PotionsImage/1687909311972-Speedcola.png'
         },
         necesidad: 'Asistencia médica',
         enfermedad: 'Diabetes',
         diagnostico: 'Diabetes tipo 2',
      },
      {
         nombre: 'Maria Gomez',
         imagen: {
            public_id: 'PotionsImage/1687909311972-Speedcola',
            secure_url: 'https://res.cloudinary.com/dtne2vbok/image/upload/v1687909302/PotionsImage/1687909311972-Speedcola.png'
         },
         necesidad: 'Rehabilitación',
         enfermedad: 'Lesión de rodilla',
         diagnostico: 'Ruptura de ligamento cruzado anterior',
      },
      {
         nombre: 'Carlos Diaz',
         imagen: {
            public_id: 'PotionsImage/1687909311972-Speedcola',
            secure_url: 'https://res.cloudinary.com/dtne2vbok/image/upload/v1687909302/PotionsImage/1687909311972-Speedcola.png'
         },
         necesidad: 'Atención psicológica',
         enfermedad: 'Depresión',
         diagnostico: 'Depresión mayor',
      },
      {
         nombre: 'Ana Martinez',
         imagen: {
            public_id: 'PotionsImage/1687909311972-Speedcola',
            secure_url: 'https://res.cloudinary.com/dtne2vbok/image/upload/v1687909302/PotionsImage/1687909311972-Speedcola.png'
         },
         necesidad: 'Tratamiento oncológico',
         enfermedad: 'Cáncer de mama',
         diagnostico: 'Carcinoma ductal invasivo',
      }
   ]);
}

module.exports = addPacients
