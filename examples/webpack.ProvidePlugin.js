const webpack = require('webpack');

class MyProvidePlugin {
  apply(compiler) {
    new webpack.ProvidePlugin({
      styled: ['styled-components', 'default'],
    }).apply(compiler);
  }
}

module.exports = MyProvidePlugin;
