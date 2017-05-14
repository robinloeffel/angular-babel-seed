const baseConfig = require('./webpack.config'),
    UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = Object.assign(baseConfig, {
    plugins: [
        new UglifyJsPlugin()
    ]
});
