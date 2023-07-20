/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('src/assets/img/img-bg-home.jpg')",
        searchBg: "url('src/assets/img/img-bg-search.jpg')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
