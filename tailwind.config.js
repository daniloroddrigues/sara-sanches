/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#ffc32c',
        'gold-dark': '#ab7d19',
        'black-ss': '#161616',
        'gray-ss': '#454545'
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... } -> taiwindcss breakpoints

      'md': '768px',
      // => @media (min-width: 768px) { ... } -> taiwindcss breakpoints

      'lg': '992px',
      // => @media (min-width: 1024px) { ... } -> taiwindcss breakpoints

      'xl': '1140px',
      // => @media (min-width: 1280px) { ... } -> taiwindcss breakpoints 

      // '2xl': '1280px',
      // => @media (min-width: 1536px) { ... } -> taiwindcss breakpoints
    }
  },
  plugins: [],
}
