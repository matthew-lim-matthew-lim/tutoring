/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{scss, js,jsx,ts,tsx}",
    './src/pages/**/*.{scss,tsx}',
    './src/components/**/*.{scss,tsx}',
    "./src/App.js",
    "./src/App.scss"
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

