const Path = require('path');
const ExtractPlugin = require('extract-text-webpack-plugin');
const extractTextPlugin = new ExtractPlugin({
    filename: 'main.css',
});

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: Path.resolve(__dirname, './src/app/index.js'),
    output: {
        path: Path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react'],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ExtractPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                }),
            },
        ],
    },
    plugins: [extractTextPlugin],
};
