'use strict'
const pkg = require('./package.json');
const libraryName = pkg.name;
const outputFile = libraryName + '.min.js';
const { resolve } = require("path")

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output:{
        path: __dirname + '/lib',
        filename: outputFile, // '[name].js'
        libraryTarget: 'umd',
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [[
                        "@babel/preset-env",
                        // {
                        //     useBuiltIns: "usage"
                        // }
                    ]],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            }
        ]
    },
    devtool: 'source-map'
}