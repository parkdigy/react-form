/* eslint-disable */
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');
const MyDefinePlugin = require('./webpack.DefinePlugin');
const MyProvidePlugin = require('./webpack.ProvidePlugin');
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
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('MyHtmlPlugin', (data, cb) => {
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
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      failOnError: isProduction,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'dist'),
        path.resolve(__dirname, 'public'),
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './public/robots.txt', to: outputPath }],
    }),
    new MyHtmlPlugin(),
    ...(isProduction
      ? [
          new CleanWebpackPlugin.CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['*'],
          }),
        ]
      : [
          new SourceMapDevToolPlugin({
            filename: '[file].map',
          }),
          new FriendlyErrorsWebpackPlugin({
            clearConsole: true,
          }),
          new ReactRefreshWebpackPlugin({ overlay: false }),
        ]),
  ],
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
        test: /\.m?js$/,
        enforce: 'pre',
        resolve: {
          fullySpecified: false,
        },
        use: ['source-map-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sa|sc)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
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
        use: 'url-loader?limit=100000&name=[name].[ext]',
      },
    ],
  },
};

module.exports = options;
