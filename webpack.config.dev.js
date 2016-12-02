var baseConfig = require('./webpack.config.js');

module.exports = Object.assign(baseConfig, {
    devtool: 'source-map'
});
