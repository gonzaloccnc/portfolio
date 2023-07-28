export interface Experience {
  role: string
  date: string
  enterprice: string,
  keyword?: string
  works: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Desarrollador Front End (Remoto)',
    date: 'Marzo 2023 - Mayo 2023',
    enterprice: 'Consigue Ventas / Lima, Perú',
    keyword: "CV-PE",
    works: [
      "- Desarrolle pantallas basadas en el diseño, aplicando First Mobile usando React y styled components.",
      "- Trabaje bajo la metodología SCRUM, donde diariamente nos reuníamos para hablar lo avanzado.",
      "- Fui colaborador destacado en las primeras semanas de mi convenio.",
      "- Aprendí a trabajar en equipo bajo la metodología SCRUM, y proponer ideas nuevas a la plataforma."
    ]
  }
]