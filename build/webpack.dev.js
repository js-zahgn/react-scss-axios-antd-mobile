const webpack = require('webpack')
const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const port = 9012;
const webpackBase = require('./webpack.base');
webpackBase.entry.index.unshift('webpack/hot/dev-server', `webpack-dev-server/client?http://localhost:${port}`);
module.exports = merge(webpackBase, {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(css|scss|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: true,
            chunks: ['index'],
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new extractTextPlugin('css/[name].css'),
        new webpack.HotModuleReplacementPlugin()
    ]
})