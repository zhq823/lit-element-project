const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const { name: libraryName } = require('./package.json');
const outputFile = libraryName + '.js';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: outputFile,
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    // 只会在内存编译打包，不会有任何输出
    devServer: {
        contentBase: resolve(__dirname, 'dist'), // 入口位置，不必run build生成dist，可以直接run dev，因为会在内存里编译打包
        compress: true, // 启用gzip压缩
        port: 9998, // 端口号
        open: true // 自动打开浏览器
    },
    devtool: 'source-map' // 本地调试，可以在浏览器查看源码，便于调试
}