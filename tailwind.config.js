module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#FFF9F4',
      'coral': {
        '100': '#FFE3D1',
        '200': '#EECAA7',
        '300': '#EDA679',
        '400': '#EB8069',
        '500': '#C2685B',
        't': '#C2685B'
      },
      'teal': {
        't': '#1D3935'
      },
      'blue': {
        '100': '#B0EEEA',
        't': '#223354'
      }
      // 'blue': '#1fb6ff',
      // 'purple': '#7e5bef',
      // 'pink': '#ff49db',
      // 'orange': '#ff7849',
      // 'green': '#13ce66',
      // 'yellow': '#ffc82c',
      // 'gray-dark': '#273444',
      // 'gray': '#8492a6',
      // 'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['BohemianSoul', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25vh) '}
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in',
        scrollLeft: 'scrollLeft 10s linear',
      },
      backgroundImage: {
        'texture': "url('./assets/texture.png')"
      }
    },
  },
  plugins: [],
}
