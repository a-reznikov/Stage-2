const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './pages/main/src/index.js',
    pets: './pages/pets/src/index.js',
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
};