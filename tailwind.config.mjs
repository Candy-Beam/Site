/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffdf7',
          100: '#fffaed',
          200: '#fff2d1',
          300: '#ffe6a6',
          400: '#ffd666',
          500: '#ffc107',
          600: '#e6a800',
          700: '#cc9600',
          800: '#b38600',
          900: '#996f00',
        },
      },
    },
  },
  plugins: [],
}