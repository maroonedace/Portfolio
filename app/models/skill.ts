export interface OldSkill {
  name: string;
  logo: any;
}

export interface Skill {
  name: string;
  className: string;
}

export interface SkillList {
  title: string;
  skills: Skill[];
}

export const programmingLanguages: Skill[] = [
  { name: "JavaScript", className: "javascript/javascript-original.svg" },
  { name: "TypeScript", className: "typescript/typescript-original.svg" },
  { name: "Python", className: "python/python-original.svg" },
  { name: "Ruby", className: "ruby/ruby-original.svg" },
  { name: "Java", className: "java/java-original.svg" },
  { name: "C#", className: "csharp/csharp-original.svg" },
  { name: "Rust", className: "rust/rust-original.svg" },
];

export const frontendSkills: Skill[] = [
  { name: "React.js", className: "react/react-original.svg" },
  { name: "Next.js", className: "nextjs/nextjs-original.svg" },
  { name: "Redux", className: "redux/redux-original.svg" },
  { name: "Tailwind CSS", className: "tailwindcss/tailwindcss-original.svg" },
  { name: "Material UI", className: "materialui/materialui-original.svg" },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", className: "nodejs/nodejs-original-wordmark.svg" },
  { name: "FastAPI", className: "fastapi/fastapi-original.svg" },
  { name: "Ruby on Rails", className: "rails/rails-plain-wordmark.svg" },
  { name: "Express", className: "express/express-original.svg" },
];

export const databaseSkills: Skill[] = [
  { name: "PostgreSQL", className: "postgresql/postgresql-original.svg" },
  { name: "MongoDB", className: "mongodb/mongodb-original.svg" },
  { name: "Supabase", className: "supabase/supabase-original.svg" },
  { name: "Redis", className: "redis/redis-original.svg" },
];

export const testingSkills: Skill[] = [
  { name: "Jest", className: "jest/jest-plain.svg" },
  { name: "RSpec", className: "rspec/rspec-original.svg" },
  { name: "Cypress", className: "cypressio/cypressio-original.svg" },
];

export const devOpsSkills: Skill[] = [
  { name: "Git", className: "git/git-original.svg" },
  { name: "Docker", className: "docker/docker-plain.svg" },
  { name: "Heroku", className: "heroku/heroku-plain.svg" },
  {
    name: "AWS",
    className: "amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
];

export const machineLearningSkills: Skill[] = [
  { name: "TensorFlow", className: "tensorflow/tensorflow-original.svg" },
  { name: "Scikit-learn", className: "scikitlearn/scikitlearn-original.svg" },
  { name: "NumPy", className: "numpy/numpy-original.svg" },
  { name: "Pandas", className: "pandas/pandas-original.svg" },
];

export const techStackList: SkillList[] = [
  { title: "Core Languages", skills: programmingLanguages },
  { title: "Frontend Development", skills: frontendSkills },
  { title: "Backend Development", skills: backendSkills },
  { title: "Data Management", skills: databaseSkills },
  { title: "Machine Learning", skills: machineLearningSkills },
  { title: "Quality Assurance & Testing", skills: testingSkills },
  { title: "Development & DevOps", skills: devOpsSkills },
];
