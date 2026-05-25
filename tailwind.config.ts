import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        mitru: {
          ink: "#070a12",
          panel: "#0d1220",
          line: "#243047",
          cyan: "#35d7ff",
          violet: "#8b5cf6",
          rose: "#ff4d6d"
        }
      },
      boxShadow: {
        glow: "0 0 36px rgba(53, 215, 255, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
