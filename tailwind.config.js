module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: '0.66rem',
      base: '1rem',
      lg: '1.61rem',
    },
    extend: {
      maxWidth: {
        "1/3": "33%",
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
