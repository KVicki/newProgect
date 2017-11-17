// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');

  // Enable this if you have to support IE8.
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify-loader',
  });

  webpackConfig.module.loaders.push({
    test: /\.(eot|ttf|svg|woff)\?[^v]*$/,
    loader: 'url-loader?limit=10000',
  });

  webpackConfig.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    antd: 'antd',
  }

  webpackConfig.output.publicPath = '/';

  // Parse all less files as css module.
  webpackConfig.module.loaders.forEach(function(loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.test = /\.dont\.exist\.file/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.test = /\.less$/;
    }
  });

  // Load src/entries/*.js as entry automatically.
  const files = glob.sync('./src/entries/*.js');
  const newEntries = files.reduce(function(memo, file) {
    const name = path.basename(file, '.js');
    memo[name] = file;
    return memo;
  }, {});
  
  webpackConfig.entry = Object.assign({}, webpackConfig.entry, newEntries);
  
  return webpackConfig;
};