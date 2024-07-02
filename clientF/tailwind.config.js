/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '10': '10',
        '50': '50',
      },
    },
  },
  plugins: [],
};
