const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

module.exports = {
 /* entry: {
    home:   './src/Pages/Home.jsx',
    categories:   './src/Pages/Categories.jsx',
    login:   './src/Pages/Login.jsx',
    productpage:   './src/Pages/ProductPage.jsx',
    products:   './src/Pages/Products.jsx',
    register:   './src/Pages/Register.jsx',
    teampage:   './src/Pages/TeamPage.jsx',
    test:   './src/Pages/Test.jsx',
  },*/
  entry: './src/index.js',
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: { path: path.resolve(__dirname, "dist") },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,

        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ],
  },
};