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
      serif: ['serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    extend: {},
  },
  plugins: [],
}
