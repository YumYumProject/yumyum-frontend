/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/assets/img/img-bg-home.jpg')",
        searchBg: "url('/assets/img/img-bg-search.jpg')",
        searchBg2: "url('/assets/img/img-bg-search-2.jpg')",
        searchBg3: "url('/assets/img/img-bg-search-3.jpg')",
        individualMenuBg: "url('/assets/img/img-bg-individual-menu.jpg')",
        registerBg: "url('/assets/img/img-bg-register.jpg')",
        loginBg: "url('/assets/img/img-bg-login.jpg')",
      },
      colors: {
        bb: '#243c5a',
        orange: '#FF8C32',
        borderInput: '#FFA559',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
