/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px'],
      base: ['16px'],
      lg: ['20px'],
      xl: ['24px'],
      header: ['36px'],
    },
    extend: {},
  },
  plugins: [],
  important: true,
}
