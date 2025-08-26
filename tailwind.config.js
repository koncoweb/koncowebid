/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kw: {
          bg: "#0b0f14",
          card: "#0e131a",
          text: "#cfd6dd",
          muted: "#8a93a0",
          neon: "#3CE47A",
          neon2: "#9BF2BE",
          line: "#17202b",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(44, 244, 160, 0.35)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}


