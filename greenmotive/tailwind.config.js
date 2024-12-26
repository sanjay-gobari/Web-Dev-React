/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0 40px 60px rgba(255,255,255, 1)', // Example custom shadow
        'inner-deep': 'inset 0 8px 10px rgba(0, 0, 0, 0.2)',   // Another example
      },
    },
  },
  plugins: [],
}