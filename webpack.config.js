const path = require('path');

const ENTRY_DIR = path.resolve(__dirname, 'client', 'src');
const OUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: path.resolve(ENTRY_DIR, 'index.jsx'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',

          },
        ],
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: { extensions: ['.js', '.jsx'] },
};
