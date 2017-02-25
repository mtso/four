var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'four.js',
    path: path.resolve(__dirname, 'public')
  }
};