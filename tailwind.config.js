/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light"],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [require("daisyui"),require('flowbite/plugin')],
};