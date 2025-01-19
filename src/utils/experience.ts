enum Keywords {
  CV_PE = "Consigue Ventas",
  ISIL = "ISIL",
  TAWA = "Grupo Tawa",
}

export interface Experience {
  role: string;
  date: string;
  enterprice: string;
  keyword?: Keywords;
  locate: string;
  works: string[];
}

export const experiences: Experience[] = [
  {
    role: "Practicante - Programador",
    date: "Mayo 2024 - Actualidad",
    enterprice: "Grupo Tawa",
    locate: "Lima, Perú",
    keyword: Keywords.TAWA,
    works: [
      "- Actualmente estoy asignado en el proyecto WorkinDocs, usando NestJS, MongoDB y ReactJS como tecnologias para su desarrollo.",
      "- Trabajo con analistas de software para mejorar la calidad del código y la experiencia del trabajo.",
      "- Mejoré mi capacidad para trabajar en equipo y colaborar con otros miembros del equipo.",
      "- Realizé una serie de tareas de sencillas y básicas hasta integraciones con otros sistemas.",
    ],
  },
  {
    role: "Practicante - Desarrollador Front End",
    date: "Marzo 2023 - Mayo 2023",
    enterprice: "Consigue Ventas",
    locate: "Lima, Perú",
    keyword: Keywords.CV_PE,
    works: [
      "- Desarrolle pantallas basadas en el diseño, aplicando First Mobile usando React y styled components.",
      "- Trabaje bajo la metodología SCRUM, donde diariamente nos reuníamos para hablar lo avanzado.",
      "- Fui colaborador destacado en las primeras semanas de mi convenio.",
      "- Aprendí a trabajar en equipo bajo la metodología SCRUM, y proponer ideas nuevas a la plataforma.",
    ],
  },
  {
    role: "Alumno - Desarrollo de Software",
    date: "Abril 2021 - Diciembre 2023",
    enterprice: "Instituto San Ignacio de Loyola",
    locate: "Lima, Perú",
    keyword: Keywords.ISIL,
    works: [
      "- Durante mi primer año aprendí a como iniciar en el Software, modelar base de datos y hacer páginas web.",
      "- En el segundo año maneje base de datos avanzado al igual que desarrollar aplicaciones móviles y web usando Frameworks.",
      "- En el último año aprendí algoritmos, al igual que diseñar sistemas, trabajar en equipo bajo SCRUM, integrar codigo y sobre todo que sea codigo limpio.",
    ],
  },
];

export { Keywords };
