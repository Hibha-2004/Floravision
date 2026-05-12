/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          900: '#0d1f0d',
          800: '#122012',
          700: '#1a2e1a',
          600: '#1e3520',
          500: '#243d26',
          400: '#2e4d30',
        },
        'leaf': '#4a7c59',
        'lime': '#8bc34a',
        'cream': '#f5f0e8',
        'muted': '#9aaa9a',
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
