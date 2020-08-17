const path = require('path');
const slsw = require('serverless-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const STREAMSOURCE_DIR = path.resolve(__dirname, 'streamSource');

const streamSourceConfig = {
  entry: ['@babel/polyfill', path.resolve(STREAMSOURCE_DIR, 'src/index.jsx')],
  target: 'web',
  output: {
    path: path.resolve(STREAMSOURCE_DIR, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      { test: /\.(js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '10-0 Max Mille Stream Source',
      template: path.resolve(STREAMSOURCE_DIR, 'public/template.html'),
    }),
    new Dotenv(),
  ],
};

const backendConfig = {
  entry: slsw.lib.entries,
  target: 'node',
  module: {
    rules: [{ test: /\.(js)x?$/, loader: 'babel-loader' }],
  },
  plugins: [new Dotenv()],
};

module.exports = slsw.lib.serverless ? backendConfig : streamSourceConfig;
