const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'), // Контекст для сборки приложения
  entry: './index.js', // Точка входа для сборки приложения
  output: {
    filename: 'js/main.js', // Имя файла сборки
    path: path.resolve(__dirname, 'dist'), // Путь для сборки приложения
  },
  devServer: {
    hot: true, // Включение горячей перезагрузки
    static: {
      directory: './dist', // Путь для сервера разработки
      watch: true, // Включение отслеживания изменений в файлах
    },
    compress: true,
    port: 9000, // Порт для сервера разработки
  },
  plugins: [
    // Подключение плагинов для сборки CSS и HTML
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  module: {
    // Настройка правил для обработки модулей (файлов)
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};
