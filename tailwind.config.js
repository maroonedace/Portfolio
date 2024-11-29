/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linkedIn: "#0A66C2",
        nZero: "#19181a",
      },
      screens: {
        xs: "425px",
        sm: "768px",
        md: "1024px",
        lg: "1440px",
        xl: "2560px",
      },
    },
  },
  plugins: [],
};
