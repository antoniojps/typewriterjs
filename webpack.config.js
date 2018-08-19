const path = require('path')

const config = {
  mode: 'production',
  entry: './typewriter.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'typewriter.min.js',
  },
}

module.exports = config