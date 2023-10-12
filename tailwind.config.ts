import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#f8860d",
        "primary-color-focus": "#cb6c06",
        "primary-color-content": "#ffffff",
        "secondary-color": "#007ebd",
        "secondary-color-focus": "#005c8a",
        "secondary-color-content": "#ffffff",
        "accent-color": "#ffd09e",
        "accent-color-focus": "#eedcc8",
        "accent-color-content": "#ffffff",
        "neutral-color": "#1e2734",
        "neutral-color-focus": "#111827",
        "neutral-color-content": "#ffffff",
        "base-100": "#ffffff",
        "base-200": "#f9fafb",
        "base-300": "#ced3d9",
        "base-content": "#1e2734",
        "info-color": "#1c92f2",
        "success-color": "#009485",
        "warning-color": "#ff9900",
      },
    },
  },
  plugins: [],
};

export default config;
