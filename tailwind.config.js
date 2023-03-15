/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./src/**/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'homepage': "url('./bg.jpeg')",
        },
        screens: {
          'sm': '400px',
        },
        width: {
          '2screen': '200vw',
          'inScreen': 'calc(100vw - 2rem)'
        },
        minWidth: {
          'slideInPanel': 'calc(100vw - 2rem)',
        }
      },
    }
  }