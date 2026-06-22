import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f4ff",
          100: "#dde6ff",
          200: "#c3d1ff",
          300: "#9db4ff",
          400: "#758cff",
          500: "#4f63f8",
          600: "#3a45ed",
          700: "#2f35d2",
          800: "#2a2faa",
          900: "#282d86",
          950: "#1a1c52",
        },
        neutral: {
          50:  "#f8f9fb",
          100: "#f1f3f6",
          200: "#e3e7ee",
          300: "#cdd4df",
          400: "#a8b4c4",
          500: "#8494a8",
          600: "#647689",
          700: "#506070",
          800: "#3a4858",
          900: "#28333f",
          950: "#161e28",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 16px 0 rgba(30,40,60,0.07)",
        card: "0 4px 24px 0 rgba(30,40,60,0.10)",
        hover: "0 8px 32px 0 rgba(30,40,60,0.14)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
