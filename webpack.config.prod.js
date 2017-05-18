const baseConfig = require('./webpack.config'),
    webpack = require('webpack');

module.exports = Object.assign(baseConfig, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
});
