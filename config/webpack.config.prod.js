const merge = require('webpack-merge'),
    webpack = require('webpack'),
    baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            },
            output: {
                comments: false
            }
        }),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ]
});
