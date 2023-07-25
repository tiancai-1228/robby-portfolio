/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C4042",
        secondary: "#0859B2",
        clinico: "#fd9b44",
      },
      fontSize: {
        h1: ["36px", { lineHeight: "46.8px" }],
        h2: ["24px", { lineHeight: "31.2px" }],
        h3: ["20px", { lineHeight: "26px" }],
      },
    },
  },
  plugins: [],
};
