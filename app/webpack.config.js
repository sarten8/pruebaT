const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    devServer: {
        host: 'localhost',
        port:3003,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: 'css-loader'
            },
            {
                test: /\.(png|svg)/,
                exclude: /node_modules/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Prueba - Mensaje',
            template: './dist/index.html',
            js: [ "./bundle.js"],
        }) 
    ]
};

module.exports = config;