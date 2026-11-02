/* eslint-disable */
const path = require('path');
const ESLintPlugin = require('eslint-rspack-plugin').default;
const HtmlRspackPlugin = require('html-rspack-plugin');
const { TsCheckerRspackPlugin } = require('ts-checker-rspack-plugin');
const { ReactRefreshRspackPlugin } = require('@rspack/plugin-react-refresh');
const { rspack } = require('@rspack/core');
const MyDefinePlugin = require('./rspack.DefinePlugin');
const MyProvidePlugin = require('./rspack.ProvidePlugin');
const sass = require('sass');
const TsConfigJson = require('./tsconfig.json');
const RootPackageJson = require('../package.json');
/* eslint-enable */

/********************************************************************************************************************
 * Variables
 * ******************************************************************************************************************/

const isProduction = process.env.NODE_ENV === 'production';
const outputPath = path.resolve(__dirname, 'dist');
const devtool = isProduction ? false : 'eval';
const mode = isProduction ? 'production' : 'development';
const repositoryName = RootPackageJson.repository.baseUrl.split('/').pop();

/********************************************************************************************************************
 * MyHtmlPlugin
 * ******************************************************************************************************************/

class MyHtmlPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
      HtmlRspackPlugin.getHooks(compilation).beforeEmit.tapAsync('MyHtmlPlugin', (data, cb) => {
        const splitText = '</head>';
        const htmls = data.html.split(splitText);
        const inject = `
          <title>${repositoryName}</title>
          <script>
            window.__AppConfig__ = {
              env: '${isProduction ? 'production' : 'development'}',
              name: '${repositoryName}',
            };
          </script>
        `;

        data.html = `${htmls[0]}${inject}${splitText}${htmls[1]}`;

        cb(null, data);
      });
    });
  }
}

/********************************************************************************************************************
 * Alias
 * ******************************************************************************************************************/

const alias = {};
if (TsConfigJson.compilerOptions.paths) {
  const paths = TsConfigJson.compilerOptions.paths;
  Object.keys(paths).forEach((key) => {
    alias[key] = path.resolve(__dirname, paths[key][0]);
  });
}

/********************************************************************************************************************
 * Options
 * ******************************************************************************************************************/

const options = {
  mode,
  devtool,
  target: isProduction ? 'browserslist' : 'web',
  entry: './src',
  stats: isProduction,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias,
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, '../node_modules')],
  },
  output: {
    path: outputPath,
    clean: isProduction,
    publicPath: isProduction ? `/${repositoryName}/examples/dist/` : '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunks/[name].[chunkhash].js',
  },
  devServer: {
    port: 9808,
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: { errors: false, runtimeErrors: false, warnings: false },
      progress: false,
    },
  },
  performance: {
    hints: isProduction ? 'warning' : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimize: isProduction,
    runtimeChunk: true,
    removeAvailableModules: isProduction,
    removeEmptyChunks: isProduction,
    splitChunks: isProduction
      ? {
          chunks: 'all',
          cacheGroups: {
            common: {
              test: /[\\/]node_modules[\\/](react|react-dom|react-router|history|stylis)[\\/]/,
              chunks: 'all',
              name(module) {
                if (module.context.includes('/node_modules/')) {
                  const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                  return `vendors/common_${packageName.replace('@', '')}`;
                }
              },
            },
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              name(module) {
                if (module.context.includes('/node_modules/')) {
                  const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                  if (packageName === '@pdg') {
                    return `vendors/pdg_${module.context.match(/[\\/]node_modules\/@pdg[\\/](.*?)([\\/]|$)/)[1]}`;
                  }
                  return `vendors/${packageName.replace('@', '')}`;
                }
              },
            },
          },
        }
      : {},
  },
  plugins: [
    new MyDefinePlugin({
      mode: process.env.NODE_ENV,
      name: repositoryName,
    }),
    new MyProvidePlugin(),
    new TsCheckerRspackPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      ...(isProduction ? {} : { severity: { error: 'warning' } }),
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'dist'),
        path.resolve(__dirname, 'public'),
      ],
    }),
    new HtmlRspackPlugin({
      template: './public/index.html',
    }),
    new rspack.CopyRspackPlugin({
      patterns: [{ from: './public/robots.txt', to: outputPath }],
    }),
    new MyHtmlPlugin(),
    ...(!isProduction ? [new ReactRefreshRspackPlugin()] : []),
  ],
  experiments: { css: true },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        exclude: path.resolve(__dirname, 'public/index.html'),
        type: 'asset/source',
      },
      {
        test: /\.(sa|sc)ss$/,
        exclude: /node_modules/,
        type: 'css/auto',
        use: [
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 100000 } },
        generator: { filename: '[name][ext]' },
      },
    ],
  },
};

module.exports = options;
