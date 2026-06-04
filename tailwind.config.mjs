/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F4F4F4",
          300: "#E8E8E8",
          400: "#D4D4D4",
        },
        ink: {
          DEFAULT: "#0F0F0F",
          900: "#0F0F0F",
          800: "#1A1A1A",
          700: "#3D3D3D",
          500: "#6B6B6B",
          400: "#9CA3AF",
        },
        krzred: {
          DEFAULT: "#C8102E",
          50: "#FEF2F4",
          100: "#FEE2E6",
          500: "#C8102E",
          600: "#A30D26",
          700: "#7F0A1E",
        },
        steel: {
          DEFAULT: "#C0C0C0",
          50: "#F4F4F4",
          100: "#E8E8E8",
          300: "#C0C0C0",
          500: "#9CA3AF",
        },
        anthracite: {
          DEFAULT: "#0F0F0F",
          900: "#000000",
          800: "#0F0F0F",
          700: "#1A1A1A",
          600: "#2A2A2A",
        },
      },
      fontFamily: {
        sans: ['"Work Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Work Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        condensed: ['"Oswald"', '"Work Sans"', "ui-sans-serif", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        tight: "-0.015em",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        prose: "65ch",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
