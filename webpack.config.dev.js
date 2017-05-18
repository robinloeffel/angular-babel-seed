const baseConfig = require('./webpack.config');

module.exports = Object.assign(baseConfig, {
    devtool: 'eval-source-map'
});
