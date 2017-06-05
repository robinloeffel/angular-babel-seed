const babelConfig = require('./babel.config');

module.exports = {
    output: {
         filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelConfig
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};
