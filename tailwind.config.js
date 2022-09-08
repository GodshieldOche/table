/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#FFFFFF',
        'mainBlack': '#353535',
        'primaryOne': '#358DEB',
        'primaryTwo': '#021E4A',
        'primaryThree': '#EB9F2D',
        'primaryFour': '#E96767',
        'secondaryOne': '#E8F4FF',
        'secondaryTwo': '#637381',
        'secondaryThree': '#FFF8DE',
        'secondaryFour': '#FFF0ED',
        'secondaryFive': '#ADC3E9',
        'secondarySix': '#F9F9FB',
      },
      fontFamily: {
        'Inter': ['Inter, sans-serif'],
        'Poppins': ['Poppins, sans-serif'],
      }
    },
    container: {
      center: true,
      padding: "0.75rem"
    },
  },
  plugins: [],
}
