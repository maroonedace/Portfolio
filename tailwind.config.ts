import { headers } from "next/headers";

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
        primary: "#151616",
        secondary: "#D3CAB7",
        js: "#CAB307",
        ts: "#2A66A7",
        python: "#28567B",
        ruby: "#CC342D",
        csharp: "#5A1B6E",
        rust: "#A30000",
        react: "#464D5D",
        next: "#595959",
        tw: "#046172",
        mui: "#0052A3",
        vite: "#2E38FF",
        tauri: "#18828C",
        node: "#44683B",
        rails: "#470000",
        pgsql: "#316192",
        supabase: "#175E3D",
        redis: "#A30023",
        jest: "#950F1C",
        rspec: "#871D34",
        cypress: "#2FA272",
        postman: "#D13800",
        aws: "#A36200",
        docker: "#1074C1",
        vercel: "#595959",
        heroku: "#5B00D1",
        circleci: "#696969",
        git: "#C22A0F",
        figma: "#C6370C",
        storybook: "#D10046",
        debian: "#64111E",
        proxmox: "#753900",
        aseprite: "#596D78",
        sckitlearn: "#CA6F07",
        matplotlib: "#329F56",
        numpy: "#2C83A5",
        jupyter: "#9B4008",
        anaconda: "#337D26",
        pandas: "#595959",
        electron: "#2A5779",
        godot: "#2A5779",
        unity: "#2D2D2D",
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

export default tailwindConfig;
