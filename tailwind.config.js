/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#fff',
      'grey': '#686D77',
      'light-grey': '#686D7750',
      'dark-blue': '#1E1D4C',
      'navy':'#181E4B',
      'light-navy': '#5E6282',
      'orange': '#DF6951',
      'yellow': '#F1A501',
      'beige': '#FFF1DA',
      'dark-beige': '#cbbdb1',
    },
    extend: {},
  },
  plugins: [],
}

