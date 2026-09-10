/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        card: '#1a1a1a',
        'card-foreground': '#ffffff',
        border: '#262626',
      },
      scrollBehavior: ['responsive'],
    },
  },
  plugins: [],
}