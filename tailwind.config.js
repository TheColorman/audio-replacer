module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        menlo: ["Menlo", "Monaco", "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", "monospace"],
      },
      screens: {
        '2xl-max': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl-max': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg-max': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md-max': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm-max': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}
