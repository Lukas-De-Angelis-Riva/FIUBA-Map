export const sistemas = [
  {
    id: "CBC28",
    materia: "Análisis Matemático",
    creditos: 0,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "CBC27",
    materia: "Álgebra",
    creditos: 0,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "CBC24",
    materia: "Introducción al Conocimiento de la Sociedad y el Estado",
    creditos: 0,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "CBC3",
    materia: "Física",
    creditos: 0,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "CBC5",
    materia: "Química",
    creditos: 0,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "CBC40",
    materia: "Introducción al Pensamiento Científico",
    creditos: 0,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "CBC",
    materia: "Ciclo Básico Común",
    creditos: 0,
    categoria: "CBC",
    title: "Ver CBC Entero",
    level: 0,
    correlativas: "CBC28-CBC27-CBC3-CBC5-CBC24-CBC40",
  },
  {
    id: "81.01",
    materia: "Análisis Matemático II",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "81.02",
    materia: "Álgebra II",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "95.14",
    materia: "Algoritmos y Programación I",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "81.11",
    materia: "Matemática Discreta",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "95.57",
    materia: "Organización del Computador",
    creditos: 8,
    correlativas: "95.14",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "95.15",
    materia: "Algoritmos y Programación II",
    creditos: 6,
    correlativas: "95.14",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "91.39",
    materia: "Estructuras y Procesos Organizacionales",
    creditos: 6,
    requiere: 22,
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "81.04",
    materia: "Probabilidad y Estadística B",
    creditos: 6,
    correlativas: "81.01-81.02",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "95.58",
    materia: "Organización de Datos",
    creditos: 6,
    correlativas: "95.57-95.15",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "95.02",
    materia: "Algoritmos y Programación III",
    creditos: 6,
    correlativas: "95.15",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "91.41",
    materia: "Economía de las Organizaciones",
    creditos: 4,
    correlativas: "81.04-91.39",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "95.03",
    materia: "Sistemas Operativos",
    creditos: 6,
    correlativas: "95.58",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "95.20",
    materia: "Métodos y Modelos en la Ingeniería de Software I",
    creditos: 6,
    correlativas: "95.02-95.58",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "95.08",
    materia: "Taller de Programación",
    creditos: 4,
    correlativas: "95.02-95.57",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "91.04",
    materia: "Modelos y Optimización I",
    creditos: 6,
    correlativas: "81.01-81.02-81.11-95.15",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "91.42",
    materia: "Administración de las Organizaciones",
    creditos: 4,
    correlativas: "91.41-95.20",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "95.21",
    materia: "Métodos y Modelos en la Ingeniería de Software II",
    creditos: 6,
    correlativas: "95.20",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "95.05",
    materia: "Base de Datos",
    creditos: 6,
    correlativas: "95.20",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "91.05",
    materia: "Modelos y Optimización II",
    creditos: 4,
    correlativas: "81.04-91.04",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "95.24",
    materia: "Administración y Control de Proyectos Informáticos I",
    creditos: 6,
    correlativas: "91.42-95.21",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "91.40",
    materia: "Legislación y Ejercicio Profesional en Sistemas e Informática",
    creditos: 4,
    requiere: 100,
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "95.59",
    materia: "Diseño Operación y Gestión de Servicios Informáticos",
    creditos: 4,
    correlativas: "91.42-95.21",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "95.60",
    materia: "Redes y Aplicaciones Distribuidas",
    creditos: 6,
    correlativas: "95.05-95.03",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "95.30",
    materia: "Estándares de Calidad y Modelos de Referencia",
    creditos: 4,
    correlativas: "95.24",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "91.35",
    materia: "Análisis de Casos",
    creditos: 3,
    correlativas: "91.05",
    categoria: "Materias Electivas",
    level: 12,
  },
  {
    id: "86.36",
    materia: "Criptografía y Seguridad Informática",
    creditos: 6,
    correlativas: "95.60",
    categoria: "Materias Electivas",
    level: 12,
  },
  {
    id: "91.24",
    materia: "Macroeconomía y Estructura Económica  Argentina",
    creditos: 6,
    correlativas: "91.39",
    categoria: "Materias Electivas",
    level: 9,
  },
  {
    id: "91.06",
    materia: "Modelos y Optimización III",
    creditos: 6,
    correlativas: "91.05",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "91.37",
    materia: "Emprendimientos en Ingeniería",
    creditos: 3,
    correlativas: "95.24",
    categoria: "Materias Electivas",
    level: 12,
  },
  {
    id: "95.04",
    materia: "Análisis Numérico I",
    creditos: 6,
    correlativas: "81.01-81.02-95.14",
    categoria: "Materias Electivas",
    level: 8,
  },
  {
    id: "95.06",
    materia: "Teoría de Algoritmos I",
    creditos: 6,
    correlativas: "81.11-95.15",
    categoria: "Materias Electivas",
    level: 8,
  },
  {
    id: "95.07",
    materia: "Teoría de Lenguajes de Programación",
    creditos: 4,
    correlativas: "95.15",
    categoria: "Materias Electivas",
    level: 8,
  },
  {
    id: "95.19",
    materia: "Simulación",
    creditos: 6,
    correlativas: "81.04-95.15",
    categoria: "Materias Electivas",
    level: 9,
  },
  {
    id: "95.25",
    materia: "Inteligencia Artificial",
    creditos: 6,
    correlativas: "95.02",
    categoria: "Materias Electivas",
    level: 9,
  },
  {
    id: "95.35",
    materia: "Evaluación e Implantación de Sistemas",
    creditos: 4,
    correlativas: "95.24",
    categoria: "Materias Electivas",
    level: 12,
  },
  {
    id: "95.37",
    materia: "Evaluación de Proyectos y Manejo de  Riesgos",
    creditos: 4,
    correlativas: "95.24",
    categoria: "Materias Electivas",
    level: 13,
  },
  {
    id: "95.09",
    materia: "Técnicas de Programación Concurrente I",
    creditos: 6,
    correlativas: "95.03",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "95.48",
    materia: "Lenguajes Formales",
    creditos: 6,
    correlativas: "81.11",
    categoria: "Materias Electivas",
    level: 8,
  },
  {
    id: "95.62",
    materia: "Innovación Tecnológica",
    creditos: 4,
    correlativas: "95.24",
    categoria: "Materias Electivas",
    level: 13,
  },
  {
    id: "95.63",
    materia: "Desarrollo de Aplicaciones Mainframe",
    creditos: 4,
    correlativas: "95.05-95.15",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "95.64",
    materia: "Auditoria de Sistemas",
    creditos: 4,
    correlativas: "95.24",
    categoria: "Materias Electivas",
    level: 13,
  },
  {
    id: "95.65",
    materia: "Diseño y Desarrollo de Interfaces de Usuario",
    creditos: 4,
    correlativas: "95.20",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "95.66",
    materia: "Bases de Datos Multidimensionales",
    creditos: 4,
    correlativas: "95.05",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "95.67",
    materia: "Minería de Datos",
    creditos: 4,
    correlativas: "95.05",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "95.68",
    materia: "Desarrollo con Nuevas Tecnologías",
    creditos: 4,
    correlativas: "95.02",
    categoria: "Materias Electivas",
    level: 9,
  },
  {
    id: "95.49",
    materia: "Lenguajes de Programación",
    creditos: 6,
    correlativas: "95.48",
    categoria: "Materias Electivas",
    level: 12,
  },
  {
    id: "95.69",
    materia: "Seminario de Sistemas de Información y Gestión",
    creditos: 4,
    correlativas: "91.42-95.21",
    categoria: "Materias Electivas",
    level: 11,
  },
  {
    id: "95.70",
    materia: "Seminario de Metodologías de Desarrollo de Sistemas",
    creditos: 4,
    correlativas: "95.21",
    categoria: "Materias Electivas",
    level: 13,
  },
  {
    id: "95.71",
    materia: "Arquitecturas y Configuraciones",
    creditos: 4,
    correlativas: "95.03",
    categoria: "Materias Electivas",
    level: 10,
  },
  {
    id: "98.xx",
    materia: "Idioma",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Electivas",
    level: 8,
  },
  {
    id: "95.61",
    materia: "Trabajo Profesional de Licenciatura en Análisis de Sistemas",
    creditos: 12,
    correlativas: "95.24-95.59-95.60",
    categoria: "Fin de Carrera (Obligatorio)",
    level: 13,
  },
];
