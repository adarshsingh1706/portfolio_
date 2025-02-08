const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background, 220, 10%, 10%))", // Default dark bg
        foreground: "hsl(var(--foreground, 0, 0%, 100%))",
        card: {
          DEFAULT: "hsl(var(--card, 220, 10%, 15%))",
          foreground: "hsl(var(--card-foreground, 0, 0%, 100%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 220, 10%, 12%))",
          foreground: "hsl(var(--popover-foreground, 0, 0%, 100%))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary, 250, 80%, 50%))",
          foreground: "hsl(var(--primary-foreground, 0, 0%, 100%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 200, 50%, 40%))",
          foreground: "hsl(var(--secondary-foreground, 0, 0%, 100%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 220, 10%, 30%))",
          foreground: "hsl(var(--muted-foreground, 0, 0%, 100%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 280, 50%, 50%))",
          foreground: "hsl(var(--accent-foreground, 0, 0%, 100%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0, 80%, 50%))",
          foreground: "hsl(var(--destructive-foreground, 0, 0%, 100%))",
        },
        border: "hsl(var(--border, 220, 10%, 20%))",
        input: "hsl(var(--input, 220, 10%, 25%))",
        ring: "hsl(var(--ring, 250, 80%, 60%))",
        chart: {
          "1": "hsl(var(--chart-1, 220, 90%, 60%))",
          "2": "hsl(var(--chart-2, 180, 80%, 50%))",
          "3": "hsl(var(--chart-3, 45, 90%, 50%))",
          "4": "hsl(var(--chart-4, 340, 80%, 50%))",
          "5": "hsl(var(--chart-5, 30, 80%, 50%))",
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );
      addBase({ ":root": newVars });
    },
    require("tailwindcss-animate"),
  ],
};
