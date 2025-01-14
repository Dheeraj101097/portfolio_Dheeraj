/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "github-dark": "#0d1117",
        "github-light": "#ffffff",
        "github-btn": "#e64e4e",
        "github-border-dark": "#30363d",
        "github-border-light": "#d0d7de",
        "github-text-dark": "#c9d1d9",
        "github-text-light": "#24292f",
      },
    },
  },
  plugins: [],
};
