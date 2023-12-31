/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "screen-gray":"#CBCBCB"
      },
      fontFamily:{
        "ubuntu": ['Ubuntu','sans-serif']

      }
    },
    boxShadow: {
      'block': '4px 4px 0px 0px #000',
    }

  },
  plugins: [],
}

