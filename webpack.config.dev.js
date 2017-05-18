const baseConfig = require('./webpack.config'),
    merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    devtool: 'eval-source-map'
});
