import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      colors: {
        ember: {
          50: "#fff1f3",
          100: "#ffe3e8",
          300: "#ff8fa3",
          400: "#fb607f",
          500: "#e3385a",
          600: "#c51942",
          700: "#9f1235"
        },
        ink: {
          950: "#030407",
          900: "#090b10",
          850: "#10131a",
          800: "#171b24"
        },
        pearl: {
          50: "#fbfaf7",
          100: "#f3f0ea",
          200: "#e6e0d7"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(227, 56, 90, 0.22)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.18)"
      },
      backgroundImage: {
        "radial-red": "radial-gradient(circle at top right, rgba(227, 56, 90, 0.28), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
