const webpack = require('webpack');
const path = require('path');
const webpackDevServer = require('webpack-dev-server');
const webpackDev = require('../build/webpack.dev');
const httpProxyMiddleware = require('http-proxy-middleware');
const openBrowser = require('react-dev-utils/openBrowser');

const compile = webpack(webpackDev);

const port = webpackDev.entry.index[1].split('localhost:')[1];
const url = `http://localhost:${port}`;

const devServer = new webpackDevServer(compile, {
    hot: true,
    stats: { colors: true },
    inline: true
});
process.env.NODE_ENV = 'dev';
httpProxyMiddleware({
    target: url, 
    changeOrigin: true,
    ws: true,
});

devServer.listen(port, function(err, stats) {
    if (err) throw err;
    if (openBrowser(url)) {
        console.log('The browser tab has been opened!');
    }
});

