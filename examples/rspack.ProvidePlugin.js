const { rspack } = require('@rspack/core');

class MyProvidePlugin {
  apply(compiler) {
    new rspack.ProvidePlugin({
      styled: ['styled-components', 'default'],
    }).apply(compiler);
  }
}

module.exports = MyProvidePlugin;
