'use strict'
const { resolve } = require("path");
const { name: libraryName } = require('./package.json');
const outputFile = `${libraryName}.min.js`;

module.exports = {
    mode: 'production',
    entry: './packages/index.js',
    output:{
        filename: outputFile, // '[name].js'
        path: resolve(__dirname, 'lib'),
        libraryTarget: 'umd',
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, './packages')
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
    }
}