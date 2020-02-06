const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { copyLibs, prodCopyLibs, prodMergeLibs } = require('./libs');
// const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const fs = require('fs');
const revisionHash = require('rev-hash');
const ReplacePlugin = require('webpack-plugin-replace');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        main: './src/main.ts',
    },
    output: {
        path: resolve('../dist'),
        filename: '[name].js?[contenthash:10]',
        chunkFilename: '[name].js?[contenthash:10]'
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
            template: 'src/index.ejs',
            inject: 'head',
            templateParameters: {
                libs: copyLibs,
            },
        }),
        new webpack.BannerPlugin('Created by Tang Guohui\nUser: tang_guohui@qq.com'),
        new CleanWebpackPlugin('dist', {root:resolve('../')}),
        new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}].concat(prodCopyLibs)),
        new webpack.NamedChunksPlugin(chunk => {
            if (chunk.name) {
                return chunk.name;
            }
            return Array.from(chunk.modulesIterable, m => m.id).join('_');
        }),
        // new MergeIntoSingleFilePlugin({files:{'libs.js':prodMergeLibs}}),
        new ReplacePlugin({
            include: /main\.ts/,
            '/res.json': '/res.json?' + revisionHash(fs.readFileSync('./src/assets/res.json')),
        }),
    ],
    optimization: {
        moduleIds: 'hashed',
    }
};