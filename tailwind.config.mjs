/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F8F5F0",
          50: "#FBF9F5",
          100: "#F8F5F0",
          200: "#F0EDE7",
          300: "#E5E0D8",
          400: "#D6D0C4",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          900: "#1A1A1A",
          700: "#3D3D3D",
          500: "#6B6B6B",
          400: "#9CA3AF",
        },
        krzred: {
          DEFAULT: "#B91C1C",
          50: "#FEF2F2",
          100: "#FEE2E2",
          500: "#B91C1C",
          600: "#991B1B",
          700: "#7F1717",
        },
        anthracite: {
          DEFAULT: "#1F1F1F",
          900: "#0F0F0F",
          800: "#1F1F1F",
          700: "#2A2A2A",
          600: "#3D3D3D",
        },
      },
      fontFamily: {
        sans: ['"Work Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Work Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
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
