/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [
    require('flowbite/plugin')
  ]
};