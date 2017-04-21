var webpack = require('webpack');

module.exports = {
    target: 'node',
    entry: './index.js',
    output: {
         filename: './dist/jisuanqi.js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]
}
