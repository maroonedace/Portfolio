/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash-display)"],
        nunito: ["Nunito", "sans-serif"],
      },
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
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeLeft2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marqueeRight2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marqueeLeft: "marqueeLeft 25s linear infinite",
        marqueeLeft2: "marqueeLeft2 25s linear infinite",
        marqueeRight: "marqueeRight 25s linear infinite",
        marqueeRight2: "marqueeRight2 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
