module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dahong: {
          DEFAULT: '#FF5A36', // 다홍색
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'ui-sans-serif', 'system-ui'],
      },
    },
    backgroundColor: {
      DEFAULT: '#fff',
    },
  },
  plugins: [],
}; 