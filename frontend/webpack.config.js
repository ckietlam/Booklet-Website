const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point của ứng dụng (tệp đầu tiên React sẽ chạy)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Cấu hình Babel
          },
        },
      },
      {
        test: /\.css$/, // Xử lý các tệp CSS
        use: [
          'style-loader', // Đưa CSS vào DOM dưới dạng style
          'css-loader', // Giải mã các tệp CSS
          'postcss-loader', // Sử dụng PostCSS để xử lý CSS (như Tailwind CSS)
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Chỉ định file HTML gốc để plugin này sử dụng
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Giúp Webpack nhận diện các tệp .js và .jsx
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Cấu hình lại để phục vụ từ thư mục public
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // Đảm bảo React Router có thể xử lý các route đúng
  },
  mode: 'development', // Chạy ở chế độ phát triển
};
