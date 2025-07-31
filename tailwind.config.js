/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        parimary :"#ff3333",
        secondery: {
          100 : "#9dc3ff",
          200 : "#5b9aff"
        }
      },
      fontFamily:{
        bodyFont: ["Poppins"]
      }


    },
  },
  plugins: [],
}

