export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: 'class',

  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), ('@tailwindcss/forms'),],
  daisyui: {
    themes: [
      {
        mytheme: {
          'base-100': '#ffffff', // Set base-100 to white
          // Customize other colors as needed
        },
      },
    ],
  }
}