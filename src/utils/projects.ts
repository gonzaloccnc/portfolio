interface Project {
  title: string
  des: string
  github: string
  web: string
  img: string
  technologies: string[]
}

const projects: Project[] = [{
  title: 'GS Movies',
  des: 'Proyecto personal de una pagina de peliculas donde uso la API de TheMovieDB.',
  github: 'https://github.com/gonzaloccnc/gs-movies',
  web: 'https://gs-movies.vercel.app/',
  img: './images/gs-movies.webp',
  technologies: ['NextJS', 'TheMovieDB', 'TailwindCSS', 'TypeScript']
},
{
  title: 'Eccomerce',
  des: 'Proyecto personal sobre una tienda online, basado en un diseño de wix.',
  github: 'https://github.com/gonzaloccnc/TechSed-Ecommerce',
  web: 'https://techsed.netlify.app/',
  img: './images/techsed.webp',
  technologies: ['React', 'TailwindCSS', 'React router', 'Redux Toolkit']
}, {
  title: 'API Eccomerce',
  des: 'Proyecto personal de una API REST hecha en Express, JWT, mongoose.',
  github: 'https://github.com/gonzaloccnc/api-eccomerce',
  web: 'https://service-ecommerce-api.onrender.com/api/products',
  img: './images/api.webp',
  technologies: ['JavaScript', 'Express', 'JWT']
}, {
  title: 'Dopamine',
  des: 'Proyecto personal basado en un diseño de behance para poder practicar con React.',
  github: 'https://github.com/gonzaloccnc/Dopamine-React',
  web: 'https://dopamine-react.netlify.app/',
  img: './images/dopamine.webp',
  technologies: ['React', 'TailwindCSS']
}
]

export {
  projects
}