export interface Technology {
  label: string;
  url: string;
}

export interface Technologies {
  frontend: Technology[];
  backend: Technology[];
  tools: Technology[];
  others: Technology[];
}

export const technologies: Technologies = {
  frontend: [
    { label: "HTML", url: "html.svg" },
    { label: "CSS", url: "css.svg" },
    { label: "Sass", url: "sass.svg" },
    { label: "TailwindCSS", url: "tailwindcss.svg" },
    { label: "JavaScript", url: "javascript.svg" },
    { label: "TypeScript", url: "typescript.svg" },
    { label: "React", url: "react.svg" },
    { label: "Zustand", url: "zustand.png" },
    { label: "R. Router", url: "react-router.svg" },
    { label: "R. Query", url: "react-query.svg" },
    { label: "Redux T.", url: "redux-toolkit.svg" },
    { label: "Axios", url: "axios.svg" },
    { label: "SWR", url: "swr.svg" },
    { label: "Vitest", url: "vitest.svg" },
  ],
  backend: [
    { label: "Next JS", url: "nextjs.svg" },
    { label: "NodeJS", url: "nodejs.svg" },
    { label: "ExpressJS", url: "expressjs.svg" },
    { label: "Vitest", url: "vitest.svg" },
    { label: "Java", url: "java.svg" },
    { label: "Spring Boot", url: "spring-boot.svg" },
    { label: "Junit5", url: "junit5.svg" },
    // { label: "Mockito", url: "mockito.ico" },
    // { label: "Asp.net", url: "dotnet.svg" },
    { label: "Go", url: "go.svg" },
    // { label: "Gin", url: "gin.svg" },
  ],
  tools: [
    { label: "Docker", url: "docker.svg" },
    { label: "MongoDB", url: "mongodb.svg" },
    { label: "PostgreSQL", url: "postgresql.svg" },
    { label: "MySQL", url: "mysql.svg" },
    { label: "Redis", url: "redis.svg" },
    { label: "SQLite", url: "sqlite.svg" },
    { label: "Git", url: "git.svg" },
    { label: "Github", url: "github.svg" },
    { label: "AWS", url: "aws.svg" },
    { label: "Jira", url: "jira.svg" },
    { label: "Firebase", url: "firebase.svg" },
    { label: "Supabase", url: "supabase.svg" },
  ],
  others: [
    { label: "Python", url: "python.svg" },
    { label: "PHP", url: "php.svg" },
    { label: "Rust", url: "rust.svg" },
  ],
};

export type KeysTechnologies = keyof Technologies;
