/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/assets/img/img-bg-home.jpg')",
        searchBg: "url('/assets/img/img-bg-search.jpg')",
        registerBg: "url('/assets/img/img-bg-register.jpg')",
        loginBg: "url('/assets/img/img-bg-login.jpg')",
      },
    },
  },
  plugins: [],
}
