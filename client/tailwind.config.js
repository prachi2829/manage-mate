/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary:'#2E3840'
      }
    },
  },
  plugins: [],
  corePlugins:{
    preflight:false,
  },
}

