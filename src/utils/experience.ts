enum Keywords {
  CV_PE = "Consigue Ventas",
  ISIL = "ISIL",
}

export interface Experience {
  role: string;
  date: string;
  enterprice: string;
  keyword?: Keywords;
  works: string[];
}

export const experiences: Experience[] = [
  {
    role: "Desarrollador Front End (Remoto)",
    date: "Marzo 2023 - Mayo 2023",
    enterprice: "Consigue Ventas / Lima, Perú",
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
    keyword: Keywords.ISIL,
    works: [
      "- Durante mi primer año aprendí a como iniciar en el Software, modelar base de datos y hacer páginas web.",
      "- En el segundo año maneje base de datos avanzado al igual que desarrollar aplicaciones móviles y web usando Frameworks.",
      "- En el último año aprendí algoritmos, al igual que diseñar sistemas, trabajar en equipo bajo SCRUM, integrar codigo y sobre todo que sea codigo limpio.",
    ],
  },
];

export { Keywords };
