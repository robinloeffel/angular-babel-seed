const merge = require('webpack-merge'),
    baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
    devtool: 'source-map'
});
