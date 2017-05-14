const baseConfig = require('./webpack.config');

module.exports = Object.assign(baseConfig, {
    devtool: 'source-map'
});
