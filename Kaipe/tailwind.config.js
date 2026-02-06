/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',
          light: '#FF8533',
          dark: '#CC5500',
        },
        dark: {
          DEFAULT: '#000000',
          light: '#1A1A1A',
          lighter: '#2D2D2D',
        },
      },
    },
  },
  plugins: [],
}
