/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vtt: {
          primary: '#1D9E75',
          dark:    '#0F6E56',
          darker:  '#085041',
          light:   '#5DCAA5',
          lightest:'#E1F5EE',
          amber:   '#EF9F27',
          blue:    '#378ADD',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.07em',
      },
      lineHeight: {
        heading: '1.25',
      },
    },
  },
  plugins: [],
}
