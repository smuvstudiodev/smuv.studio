module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '100':'100px'
      },
      colors:{
        'primary':'#C2C2CC'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}