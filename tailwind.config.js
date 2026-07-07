/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0f0f0e',
          card: '#181715',
          cardLight: '#24221f',
        },
        text: {
          cream: '#f4efe6',
          muted: '#a39e93',
        },
        accent: {
          gold: '#d4af37',
          goldHover: '#e6c556',
          bronze: '#8c6d3f',
        },
        border: {
          wood: '#332f29',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 30px rgba(0, 0, 0, 0.4)',
        goldGlow: '0 4px 20px rgba(212, 175, 55, 0.2)',
        goldGlowHover: '0 6px 25px rgba(212, 175, 55, 0.4)',
      }
    },
  },
  plugins: [],
}
