const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
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
        new webpack.BannerPlugin('Created by Tang Guohui\nUser: tang_guohui@qq.com'),
        new CleanWebpackPlugin('dist', {root:resolve('../')}),
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'},
            {from: 'src/libs/egret/egret.min.js', to: 'libs/egret.js'},
            {from: 'src/libs/egret/egret.web.min.js', to: 'libs/egret.web.js'},
            {from: 'src/libs/tween/tween.min.js', to: 'libs/tween.js'},
            {from: 'src/libs/assetsmanager/assetsmanager.min.js', to: 'libs/assetsmanager.js'},
        ]),
        new webpack.NamedChunksPlugin(chunk => {
            if (chunk.name) {
                return chunk.name;
            }
            return Array.from(chunk.modulesIterable, m => m.id).join('_');
        })
    ],
    optimization: {
        moduleIds: 'hashed',
    }
};