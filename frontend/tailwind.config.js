module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Đảm bảo Tailwind kiểm tra các file JS/JSX của bạn
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'sans-serif'],
        lora: ['Lora', 'serif'],  // Thêm Lora font
      },
    },
  },
  plugins: [],
};
