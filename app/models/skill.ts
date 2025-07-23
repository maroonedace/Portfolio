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
  { name: "Tailwind CSS", className: "tailwindcss/tailwindcss-original.svg" },
  { name: "Material UI", className: "materialui/materialui-original.svg" },
  { name: "React Query", className: "reactnative/reactnative-original.svg" },
  { name: "React Router", className: "reactrouter/reactrouter-original.svg" },
  { name: "Redux", className: "redux/redux-original.svg" },
  { name: "Vite", className: "vitejs/vitejs-original.svg" },
  { name: "Tauri", className: "tauri/tauri-original.svg" },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", className: "nodejs/nodejs-original-wordmark.svg" },
  { name: "FastAPI", className: "fastapi/fastapi-original.svg" },
  { name: "Rails", className: "rails/rails-plain-wordmark.svg" },
];

export const databaseSkills: Skill[] = [
  { name: "PostgreSQL", className: "postgresql/postgresql-original.svg" },
  { name: "MongoDB", className: "mongodb/mongodb-original.svg" },
  { name: "Supabase", className: "supabase/supabase-original.svg" },
  { name: "Redis", className: "redis/redis-original.svg" },
  {
    name: "Microsoft SQL Server",
    className: "microsoftsqlserver/microsoftsqlserver-original.svg",
  },
];

export const testingSkills: Skill[] = [
  { name: "Jest", className: "jest/jest-plain.svg" },
  { name: "RSpec", className: "rspec/rspec-original.svg" },
  { name: "Cypress", className: "cypressio/cypressio-original.svg" },
  { name: "Postman", className: "postman/postman-original.svg" },
];

export const devOpsSkills: Skill[] = [
  {
    name: "AWS",
    className: "amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  { name: "Docker", className: "docker/docker-plain.svg" },
  { name: "Vercel", className: "vercel/vercel-original.svg" },
  { name: "Heroku", className: "heroku/heroku-plain.svg" },
  { name: "Github Actions", className: "githubactions/githubactions-original.svg" },
  { name: "CircleCI", className: "circleci/circleci-plain.svg" },
  { name: "Git", className: "git/git-original.svg" },
  { name: "Jira", className: "jira/jira-original.svg" },
];

export const machineLearningSkills: Skill[] = [
  { name: "TensorFlow", className: "tensorflow/tensorflow-original.svg" },
  { name: "Scikit-learn", className: "scikitlearn/scikitlearn-original.svg" },
  { name: "NumPy", className: "numpy/numpy-original.svg" },
  { name: "Pandas", className: "pandas/pandas-original.svg" },
  { name: "Matplotlib", className: "matplotlib/matplotlib-original.svg" },
  { name: "Anaconda", className: "anaconda/anaconda-original.svg" },
];

export const designSkills: Skill[] = [
  { name: "Figma", className: "figma/figma-original.svg"},
  { name: "Canva", className: "canva/canva-original.svg"},
  { name: "Storybook", className: "storybook/storybook-original.svg"}
]

export const documentationSkills: Skill[] = [
  { name: "Confluence", className: "confluence/confluence-original.svg" },
  { name: "Notion", className: "notion/notion-original.svg" },
  { name: "Storybook", className: "storybook/storybook-original.svg" },
  { name: "Markdown", className: "markdown/markdown-original.svg" },
]

export const techStackList: SkillList[] = [
  { title: "🧠 Core Programming Languages", skills: programmingLanguages },
  { title: "🎨 Web & Client-Side Technologies", skills: frontendSkills },
  { title: "⚙️ Server-Side Technologies", skills: backendSkills },
  { title: "💾 Databases & Data Management", skills: databaseSkills },
  { title: "🧪 Testing & Quality Assurance", skills: testingSkills },
  { title: "🤖 Machine Learning & Data Science", skills: machineLearningSkills },
  { title: "⚡ DevOps & CI/CD", skills: devOpsSkills },
  { title: "🧰 Design Systems & Prototyping", skills: designSkills}, 
  { title: "📚 Documentation & Productivity", skills: documentationSkills },
];
