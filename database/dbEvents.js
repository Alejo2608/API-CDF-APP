const Eventos = require('../models/Eventos')
require('dotenv').config()

function addEvents() {
   Eventos.insertMany([
      {
         organizador: 'Brian',
         participantes: ['Roberto', 'Brian'],
         imagen: {
            public_id: 'Eventos UVM-Events/Titulo_para_la_UVM_tj3wt1',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681569125/Eventos%20UVM-Events/Titulo_para_la_UVM_tj3wt1.jpg'
         },
         titulo: 'Titulo para la UVM',
         descripcion: [
            'La Universidad Valle del Momboy, es una Institución de Educación Universitaria de carácter comunitario, sin fines de lucro, de inspiración humanista - cristiana, fruto del esfuerzo de diversos sectores de la sociedad civil trujillana, que anhelaban una Universidad propia para el Estado Trujillo. No fue sino hasta el 20 de noviembre de 1832, luego de separada Venezuela de Colombia y bajo el mandato del General José Antonio Páez, cuando el Vice-Presidente Diego Bautista Urbaneja, encargado del Poder Ejecutivo, decreta la creación del Colegio Nacional de Varones de Trujillo en el edificio del convento. Gracias a su meritoria trayectoria el 16 de diciembre de 1872, mediante Decreto No. 1.787 del Presidente Antonio Guzmán Blanco, se transforma en la Universidad de Trujillo, y a partir de 1873 comenzó a otorgar títulos profesionales en ciencias políticas, ciencias eclesiásticas y ciencias médicas. Lamentablemente fue cerrado en el año de 1900 por el Presidente Cipriano Castro y pierde sus cuantiosos bienes.'
         ],
         keywords: ['Tecnologia'],
         facultad: 'Facultad de ingenieria',
         tipo: ['Videoconferencia'],
         categoria: ['Computacion'],
         fecha: '2023-04-20',
         hora: '09:00',
         duracion: '02:00',
         lugar: 'Laboratorio de Computación',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Diego',
         participantes: ['Cheo', 'Ramon'],
         imagen: {
            public_id: 'Eventos UVM-Events/Titulo_para_la_UVM_2_if5epe',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568407/Eventos%20UVM-Events/Titulo_para_la_UVM_2_if5epe.jpg'
         },
         titulo: 'Titulo para la UVM 2',
         descripcion: [
            'En la historia de la educación superior trujillana cuenta la iniciativa privada de creación en 1923 de la Escuela de Ciencias Políticas. Poco después y ante las dificultades para su sostenimiento se adscribe a la Gobernación del Estado y bajo la tutela académica de la Universidad de Los Andes. Tras también una meritoria labor, pero penetrada por los vicios de la politiquería, cierra definitivamente sus puertas en 1947. El 7 de octubre de 1958 la Universidad de Los Andes inicia los estudios universitarios en la ciudad de Valera. Con la creación de algunas cátedras de medicina en el Hospital Central de Valera. Más tarde y luego de una lucha sostenida por la comunidad trujillana, respaldada en Mérida por la Asociación de Estudiantes Trujillanos, el 7 de octubre de 1972 la Universidad de Los Andes crea el Núcleo Universitario Rafael Rangel en la ciudad de Trujillo, con carreras de Educación y luego Ingeniería Agrícola, Administración y otras.'
         ],
         keywords: ['Programacion'],
         facultad: 'Facultad de ingenieria',
         tipo: ['Videoconferencia'],
         categoria: ['Computacion'],
         fecha: '2023-04-22',
         hora: '09:00',
         duracion: '02:00',
         lugar: 'Laboratorio de Computación',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Brian',
         participantes: ['Roberto', 'Brian'],
         imagen: {
            public_id: 'Eventos UVM-Events/SemanaUniversitaria_gizqth',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568405/Eventos%20UVM-Events/SemanaUniversitaria_gizqth.jpg'
         },
         titulo: 'Semana Universitaria',
         descripcion: [
            'Cada año, en el mes de abril, se celebra en la Universidad de Costa Rica, la tradicional Semana Universitaria. Como parte de esta festividad, los estudiantes se visten con camisetas representativas de sus carreras y asisten a diversas actividades académicas, culturales, deportivas y artísticas. Los conciertos con agrupaciones nacionales, las conferencias, los torneos deportivos, las exposiciones y otras presentaciones artísticas y culturales, se apropian del campus y cautivan al público universitario y a vecinos de los alrededores de San Pedro de Montes de Oca. Esta particular celebración se ha mantenido a los largo de seis décadas y fue convirtiéndose, con el paso de los años, en una de las tradiciones más significativas de la comunidad universitaria.Pero más allá de ser solo una celebración llena de música, arte y alegría,  la Semana U, como muchos la llaman, encierra en su razón de ser, la remembranza de la luchas históricas que ha emprendido el Movimiento Estudiantil.'
         ],
         keywords: ['Programacion', 'Tecnologia'],
         facultad: 'Facultad de ingenieria',
         tipo: ['Videoconferencia', 'Programar'],
         categoria: ['Computacion'],
         fecha: '2023-04-30',
         hora: '09:00',
         duracion: null,
         lugar: 'Laboratorio de Computación',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
      {
         organizador: 'Antonio',
         imagen: {
            public_id: 'Eventos UVM-Events/FeriaDeEmprendimiento_auvtbj',
            secure_url:
               'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1681568403/Eventos%20UVM-Events/FeriaDeEmprendimiento_auvtbj.jpg'
         },
         titulo: 'Feria de Emprendimiento',
         descripcion: [
            'El proceso de formación orientado al emprendimiento, permite familiarizarse con la cultura del emprendimiento sostenible, a fin de promover ideas de emprendedoras que permitan mejorar la calidad de vida de los jóvenes. Este es un espacio diseñado para conocer algunos de los proyectos de emprendimiento que los/las jóvenes del proyecto Juven TIC han desarrollado. Para facilitar la búsqueda, usted podrá ubicar un proyecto de su interés seleccionando por sectores empresariales. La feria de emprendimiento es una simulación de rueda de negocios donde los estudiantes actuales de la materia Emprendimiento e Innovación en Modelos de Negocios, presentan sus proyectos y son evaluados por jurados evaluadores altamente calificados internos y externos son un buen contexto para poder hacerse conocido como emprendedor.'
         ],
         tipo: ['Forochat'],
         fecha: '2023-04-11',
         hora: '09:00',
         duracion: '03:00',
         lugar: 'Aula Audiovisual',
         createdBy: `${process.env.ID_CREATED_BY}`
      },
   ])
}

module.exports = addEvents
