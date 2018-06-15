const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
    target: 'node',
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'rdx-cli',
        libraryTarget: 'umd'
    },
    stats: {
        warnings: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: resolve(__dirname, 'node_modules')
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
};
