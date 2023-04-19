const path = require('path');

module.exports = {
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    // Set the publicPath to the root of your website
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
       // Set the output path for your images
       generator: {
         filename: 'imgs/[name][ext]'
       }
     },
     {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      // Set the output path for your fonts
      generator: {
        filename: 'fonts/[name][ext]'
      }
    },
    ],
  },
};
