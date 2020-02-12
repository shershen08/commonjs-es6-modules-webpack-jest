const Path = require('path');
const Webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: {
    app: Path.resolve(__dirname, './app.js')
  },
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    inline: true
  },
//   plugins: [
//     new Webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('development')
//     })
//   ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true']
      }
    ]
  }
};