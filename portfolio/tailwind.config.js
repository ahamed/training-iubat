/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Inter Tight', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    
    extend: {
      colors: {
        surface: {
          default: "#F5F5F5",
          hover: "#E0E0E0",
          active: "#AEAEAE",
          disabled: "#F0F0F0",
          aqua: '#F0F0F6'
        },
        primary: {
          default: "#FFB400",
          hover: "#FFC740",
          active: "#FFD680",
          disabled: "#FFE8B3",
        },
        secondary: {
          default: 'hotpink'
        },
        main: {
          default: '#2B2B2B',
          neutral: '#767676',
          muted: '#F0F0F6'
        }
      }
    },
  },
  plugins: [],
}

