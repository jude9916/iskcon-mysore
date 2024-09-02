/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./node_modules/flowbite/**/*.js"],
  theme: { 
    extend: {      
      fontFamily: {
        tangerineFont: ['"Tangerine", cursive, sans-serif'],
        ralewayFont: ['"Raleway", sans-serif'],
        interFont:['"Inter", sans-serif'],
        dmserifFont:['"DM Serif Text", serif'],
        // Add more custom font families as needed
      },
      dropShadow: {
        'border': '2px 2px 2px rgb(30 144 255 / 0.9)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
    },    
      
      },
      plugins: [
        require('flowbite/plugin'),
              ],
    };