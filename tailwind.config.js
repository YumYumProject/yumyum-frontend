/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('src/assets/img/img-bg-home.jpg')",
        searchBg: "url('src/assets/img/img-bg-search.jpg')",
        registerBg: "url('src/assets/img/img-bg-register.jpg')",
        loginBg: "url('src/assets/img/img-bg-login.jpg')"
      },
    },
  },
  plugins: [],
}
