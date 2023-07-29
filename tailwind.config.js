/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/assets/img/img-bg-home.jpg')",
        searchBg: "url('/assets/img/img-bg-search.jpg')",
        createCommentBg: "url('/assets/img/img-bg-create-comment.jpg')",
        editCommentBg: "url('/assets/img/img-bg-edit-comment.jpg')",
        individualMenuBg: "url('/assets/img/img-bg-individual-menu.jpg')",
        registerBg: "url('/assets/img/img-bg-register.jpg')",
        loginBg: "url('/assets/img/img-bg-login.jpg')",
        testH1: "url('/assets/img/testhome1.jpg')",
        testH2: "url('/assets/img/testhome2.jpg')",
        testH3: "url('/assets/img/bgbgbgbg.jpg')",
        testH4: "url('/assets/img/various-vegetables-black-table-with-space-message.jpg')",
      },
      colors: {
        bb: '#243c5a',
        orange: '#FF8C32',
        borderInput: '#FFA559',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('daisyui')],
}
