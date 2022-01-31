const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "", "index.jsx"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    host: '192.168.1.21',//your ip address
    port: 8080,
   // disableHostCheck: true,
    open: true,
   // openPage: "http://localhost:8080"
  },
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
            {loader: "style-loader"},
            {loader: "css-loader"}
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "", "index.html"),
    }),
  ],
}

