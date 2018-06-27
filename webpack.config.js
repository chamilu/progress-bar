const Path = require('path');
const ExtractPlugin = require('extract-text-webpack-plugin');

const extractTextPlugin = new ExtractPlugin({
    filename: 'main.css',
});

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: Path.resolve(__dirname, './src/app/index.jsx'),
    output: {
        path: Path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['stage-1', 'env', 'react'],
                            plugins: ['transform-class-properties'],
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
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [extractTextPlugin],
    devServer: {
        port: 3000,
        contentBase: './public',
    },
};
