import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070b",
        surface: "#0a0d14",
        surface2: "#0f1320",
        border: "#1a1f2e",
        muted: "#8a92a6",
        primary: {
          DEFAULT: "#22d3ee",
          glow: "#06b6d4",
          dark: "#0e7490",
        },
        accent: {
          DEFAULT: "#a78bfa",
          glow: "#8b5cf6",
        },
        success: "#34d399",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(34,211,238,0.15), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(34, 211, 238, 0.45)",
        "glow-lg": "0 0 80px -20px rgba(34, 211, 238, 0.55)",
        "glow-purple": "0 0 40px -10px rgba(167, 139, 250, 0.45)",
      },
      animation: {
        "grid-flow": "gridFlow 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        gridFlow: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
