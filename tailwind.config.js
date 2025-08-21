// tailwind.config.js
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}', // Si vous utilisez un dossier src/
      ],
    theme: {
      extend: {
        colors: {
            'purple-custom': '#6366f1',
            'pink-custom': '#ec4899',
            'dark-bg': '#0f0f23',
            'card-bg': '#1a1a2e',
        },
        boxShadow: {
            'inner-custom': 'inset 0 0.5px 0 0 rgba(255, 255, 255, 0.5)',
            'purple-glow': '0 -2px 40px 0 rgba(187, 155, 255, 0.5)',
            'purple-light': '0 -2px 10px 0 rgba(233, 223, 255, 0.7)'
        },
        fontFamily: {
          montserrat: ["Montserrat", "sans-serif"],
        },
      },
    },
  };
  