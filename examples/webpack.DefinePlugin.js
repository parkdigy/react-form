const webpack = require('webpack');

const llProduction = `(
  (message, ...args) => {
    
  }
)`;

const llDevelopment = `(
  (message, ...args) => {
    console.log(message, ...args);
  }
)`;

class MyDefinedPlugin {
  _data = undefined;

  constructor({ mode, name }) {
    const env = {
      mode,
      isDevelopment: mode !== 'production',
      isProduction: mode === 'production',
      name,
    };

    this._data = {
      env: JSON.stringify(env),
      ll: env.isProduction ? llProduction : llDevelopment,
    };
  }

  apply(compiler) {
    new webpack.DefinePlugin(this._data).apply(compiler);
  }
}

module.exports = MyDefinedPlugin;
