/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-primary": "#635FC7",
        "blue-secondary": "#A8A4FF" , 
        "black-primary":"#000112",
        "black-secondary":"#20212C",
        "gray-primary":"#828FA3",
        "gray-secondary":"#E4EBFA",
        "gray-tertiary":"#F4F7FD",
        "white":"#FFFFFF",
        "red":"#EA5555",
        "red-secondary":"#FF9898",
        
      }
    },
  },
  plugins: [],
}

