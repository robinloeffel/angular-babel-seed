let baseConfig = require('./webpack.config.js'),
    UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin.js');

module.exports = Object.assign(baseConfig, {
    plugins: [
        new UglifyJsPlugin()
    ]
});
