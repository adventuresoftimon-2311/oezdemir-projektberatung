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
           gold: '#D29F2C',
           DEFAULT: '#D29F2C', // Default primary
           darkblue: '#102332',
         },
         secondary: {
           lightyellow: '#FEF0C7',
         },
         text: {
           main: '#102332',
           light: '#FFFFFF',
         }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
