const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { copyLibs, devCopyLibs, devMergeLibs } = require('./libs');
// const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

const setting = JSON.parse(fs.readFileSync('./build/setting.json'));

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        main: './src/main.ts',
    },
    output: {
        path: resolve('../dist'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
    },
    devServer: {
        hot: true,
        clientLogLevel: 'error',
        host: '0.0.0.0',
        //disableHostCheck: true,
        proxy: {
            '/': {
                target: 'https://gridswall.com',
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: '../dist/index.html',
            template: 'src/index.ejs',
            inject: 'head',
            templateParameters: {
                setting,
                libs: copyLibs,
            },
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}].concat(devCopyLibs)),
        // new MergeIntoSingleFilePlugin({files:{'libs.js':devMergeLibs}}),
    ],
};