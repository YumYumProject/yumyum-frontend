/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/assets/img/img-bg-home.jpg')",
        searchBg: "url('/assets/img/img-bg-search.jpg')",
        registerBg: "url('/assets/img/reeeeee.jpg')",
        loginBg: "url('/assets/img/loooogin.jpg')",
        testH1: "url('/assets/img/testhome1.jpg')",
        testH2: "url('/assets/img/testhome2.jpg')",
        testH3: "url('/assets/img/bgbgbgbg.jpg')",
        testH4: "url('/assets/img/various-vegetables-black-table-with-space-message.jpg')",
      },
    },
  },
  plugins: [],
}
