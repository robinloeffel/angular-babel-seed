let webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
         filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};
