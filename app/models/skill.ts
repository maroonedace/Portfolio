export interface OldSkill {
  name: string
  logo: any
}

export interface Skill {
  name: string
  className: string
}


export const techStackList: Skill[] = [
  { name: "JavaScript",        className: "javascript/javascript-original.svg" },
  { name: "TypeScript",        className: "typescript/typescript-original.svg" },
  { name: "Python",            className: "python/python-original.svg" },
  { name: "C#",                className: "csharp/csharp-original.svg" },
  { name: "Ruby",              className: "ruby/ruby-plain.svg" },
  { name: "Java",              className: "java/java-original.svg" },
  { name: "Rust",              className: "rust/rust-original.svg" },

  { name: "React.js",          className: "react/react-original.svg" },
  { name: "Next.js",           className: "nextjs/nextjs-original.svg" },
  { name: "Redux",             className: "redux/redux-original.svg" },
  { name: "Git",               className: "git/git-original.svg" },
  { name: "Ruby on Rails",     className: "rails/rails-plain-wordmark.svg" },
  { name: "Node.js",           className: "nodejs/nodejs-original-wordmark.svg" },
  { name: "PostgreSQL",        className: "postgresql/postgresql-original.svg" },
  { name: "MongoDB",           className: "mongodb/mongodb-original.svg" },
  { name: "Supabase",          className: "supabase/supabase-original.svg" },
  { name: "Docker",            className: "docker/docker-plain.svg" },
  { name: "Heroku",            className: "heroku/heroku-plain.svg" },
  { name: "AWS",               className: "amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Tailwind CSS",      className: "tailwindcss/tailwindcss-original.svg" },
  { name: "Material UI",       className: "materialui/materialui-original.svg" },
  { name: "Figma",             className: "figma/figma-original.svg" },
  { name: "Unity",             className: "unity/unity-original.svg" }
];