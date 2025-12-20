/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: 'var(--text-primary)', // #181d27
          secondary: 'var(--text-secondary)', // #414651
          tertiary: 'var(--text-tertiary)', // #535862
          quaternary: 'var(--text-quaternary)', // #717680
        },
        primary: {
          50: 'var(--color-primary-50)', // #ebf1ff
          100: 'var(--color-primary-100)', // #d6e4ff
          500: 'var(--color-primary-500)', // #004eeb
          700: 'var(--color-primary-700)', // #01297a
        },
        bg: {
          primary: 'var(--bg-primary)', // #ffffff
          surface: 'var(--bg-color-surface)', // #ffffff
          page: 'var(--bg-color)', // #f4f4f4
        },
        border: {
          secondary: 'var(--border-secondary)', // #e9eaeb
          DEFAULT: 'var(--color-border)', // #d5d7da
        },
      },
      spacing: {
        'gap-8': 'var(--gap-8)',
        'gap-12': 'var(--gap-12)',
        'gap-16': 'var(--gap-16)',
        'gap-32': 'var(--gap-32)',
      },
      borderRadius: {
        'radius-12': 'var(--radius-12)',
        'radius-40': 'var(--radius-40)',
      },
      fontFamily: {
        sans: ['IRANYekanX', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
