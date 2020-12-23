const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'lit-element-project.js',
        path: resolve(__dirname, 'dist'),
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                // 'style-loader', 
                MiniCssExtractPlugin.loader,
                'css-loader', 
                'less-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                // 'style-loader', 
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 8 * 1024,
                name: '[hash:10].[ext]',
                esModule: false,
                outputPath: 'images'
            }
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            exclude: /\.(html|js|css|jpg|png|gif|less)$/,
            loader: 'file-loader',
            options: {
                name: '[hash:10].[ext]'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 8888,
        open: true
    }
}