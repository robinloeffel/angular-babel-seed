const baseConfig = require('./webpack.config'),
    webpack = require('webpack'),
    merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
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
