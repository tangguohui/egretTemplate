const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
            template: 'src/index.html',
            inject: false,
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'},
            {from: 'src/libs/egret/egret.js', to: 'libs/egret.js'},
            {from: 'src/libs/egret/egret.web.js', to: 'libs/egret.web.js'},
            {from: 'src/libs/tween/tween.js', to: 'libs/tween.js'},
            {from: 'src/libs/assetsmanager/assetsmanager.js', to: 'libs/assetsmanager.js'},
        ]),
    ],
};