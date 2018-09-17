const webpack = require('webpack')
const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')// 2018-9-3 优化打包
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, '')
];

module.exports = {
    entry: {
        'index': ['./src/index.js']
    },
    output: {
        filename: 'js/[name].[hash].js',
        publicPath: '/',
        path: path.resolve(__dirname, '../dist/'),
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
		extensions: ['.web.js', '.js','.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: svgSpriteDirs,
            }, 
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            }, 
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                loader: 'html-loader?attrs=img:src img:data-src'
        }, {
            test: /\.(jpg|gif|png)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: 'img/[hash:8].[name].[ext]',
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            exclude: /(node_modules)/,
            use: 'file-loader'
        }]
        },

    plugins: [
         // 打包优化 
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, '..'), 
            manifest: require('./vendor-manifest.json')
        }),
        //这个主要是将生成的vendor.dll.js文件加上hash值插入到页面中。
        new AddAssetHtmlPlugin([{
            filepath: path.resolve(__dirname,'../build/vendor.dll.js'),
            outputPath: 'js',
            publicPath: '/js',
            includeSourcemap: false,
            hash: true,
        }]),
    ]
}