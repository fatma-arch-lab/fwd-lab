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
        // Electric cobalt — primary brand accent
        brand: {
          50:  "#eef3ff",
          100: "#dce8ff",
          200: "#b9d1ff",
          300: "#84adff",
          400: "#4d82ff",
          500: "#1d55ff",
          600: "#0047f5",
          700: "#0039d1",
          800: "#0030a8",
          900: "#012d83",
          950: "#011b52",
        },
        // Ink — dark navy scale for text and dark surfaces
        ink: {
          50:  "#f7f8fc",
          100: "#eef0f8",
          200: "#d9dded",
          300: "#b5bcda",
          400: "#8b96c0",
          500: "#6874a5",
          600: "#515c8a",
          700: "#424a71",
          800: "#2e344f",
          900: "#1a2035",
          950: "#0a0f1e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["4.5rem",  { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "h1":      ["3.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.025em" }],
        "h2":      ["2.5rem",  { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h3":      ["1.5rem",  { lineHeight: "1.3",  letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        soft:  "0 1px 3px 0 rgba(10,15,30,0.06), 0 4px 16px 0 rgba(10,15,30,0.06)",
        card:  "0 2px 8px 0 rgba(10,15,30,0.06), 0 8px 32px 0 rgba(10,15,30,0.08)",
        hover: "0 4px 12px 0 rgba(10,15,30,0.08), 0 16px 48px 0 rgba(10,15,30,0.12)",
        glow:  "0 0 0 3px rgba(0,71,245,0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0a0f1e 0%, #1a2035 50%, #0d1626 100%)",
        "brand-gradient": "linear-gradient(135deg, #0047f5 0%, #1d55ff 50%, #4d82ff 100%)",
        "subtle-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
