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
          primary: '#8DC63F',
          dark:    '#6B9A30',
          darker:  '#1B3461',
          light:   '#B5DC6B',
          lightest:'#EEF7D6',
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
