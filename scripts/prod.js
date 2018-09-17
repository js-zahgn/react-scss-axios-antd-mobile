const path = require('path')
const webpack = require('webpack');
const ora = require('ora');
const webpackProd = require('../build/webpack.prod');

const spinner = ora('Start Build --');

process.env.NODE_ENV = 'production';

spinner.start();

webpack(webpackProd, function(err, stats) {
    spinner.stop();
    if (stats.endTime) {
        console.log('-----');
        console.log('----- Build Complete!');
        console.log(`----- ${new Date(stats.endTime)}`);
    }
    if (err) throw err;
})
