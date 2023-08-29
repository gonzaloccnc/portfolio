interface Project {
  id: string,
  title: string
  des: string
  github: string
  web: string
  imgs: string[]
  technologies: string[]
}

const projects: Project[] = [{
  id: 'gs_movies',
  title: 'GS Movies',
  des: 'Proyecto personal de una pagina de peliculas donde uso la API de TheMovieDB.',
  github: 'https://github.com/gonzaloccnc/gs-movies',
  web: 'https://gs-movies.vercel.app/',
  imgs: ['./images/gs_movies_mk.webp', './images/mobile_gs_movies_mk.webp'],
  technologies: ['NextJS', 'TheMovieDB', 'TailwindCSS', 'TypeScript']
}, {
  id: 'mplace_rest',
  title: 'API Marketplace',
  des: 'Proyecto personal implementando Spring Boot, Security, PostgreSQL y Swagger UI',
  github: 'https://github.com/gonzaloccnc/marketplace_backend',
  web: 'https://marketplace-5ht5.onrender.com/api/v1/swagger-ui/index.html',
  imgs: ['./images/api.webp'],
  technologies: ['Java', 'Spring boot', 'Swagger', 'JWT']
}, {
  id: 'ecommerce',
  title: 'Eccomerce',
  des: 'Proyecto personal sobre una tienda online, basado en un diseño de wix.',
  github: 'https://github.com/gonzaloccnc/TechSed-Ecommerce',
  web: 'https://techsed.netlify.app/',
  imgs: ['./images/techsed_mk.webp', './images/techsed2_mk.webp', './images/techsed3_mk.webp'],
  technologies: ['React', 'TailwindCSS', 'React router', 'Redux Toolkit']
}, {
  id: 'api_ecommerce',
  title: 'API Eccomerce',
  des: 'Proyecto personal de una API REST hecha en Express, JWT, mongoose.',
  github: 'https://github.com/gonzaloccnc/api-eccomerce',
  web: 'https://service-ecommerce-api.onrender.com/api/products',
  imgs: ['./images/api.webp'],
  technologies: ['JavaScript', 'Express', 'JWT']
}, {
  id: 'dopamine',
  title: 'Dopamine',
  des: 'Proyecto personal basado en un diseño de behance para poder practicar con React.',
  github: 'https://github.com/gonzaloccnc/Dopamine-React',
  web: 'https://dopamine-react.netlify.app/',
  imgs: ['./images/dopamine_mk.webp', './images/dopamine2_mk.webp', './images/dopamine3_mk.webp', './images/dopamine_mobile_mk.webp'],
  technologies: ['React', 'TailwindCSS']
}
]

export {
  projects
}