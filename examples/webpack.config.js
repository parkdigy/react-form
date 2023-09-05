const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const PackageJson = require('../package.json');
const { SourceMapDevToolPlugin } = require('webpack');

//--------------------------------------------------------------------------------------------------------------------

const isProduction = process.env.NODE_ENV === 'production';
const isLibProduction = isProduction || process.env.LIB_ENV === 'production';
const outputPath = path.resolve(__dirname, 'dist');
const devtool = isProduction ? 'eval-cheap-source-map' : 'eval';
const mode = isProduction ? 'production' : 'development';

//--------------------------------------------------------------------------------------------------------------------

const preBuildScripts = [];
if (!isProduction) {
  const packageJson = PackageJson;
  const packageNames = Object.keys(packageJson.peerDependencies || {}).filter(
    (packageName) => !packageName.startsWith('@emotion/')
  );
  if (packageNames.length > 0) {
    packageNames.forEach((packageName) => {
      preBuildScripts.push(
        `echo ">>>>> node_modules/${packageName} npm link" && cd node_modules/${packageName} && npm link`
      );
    });
  }

  preBuildScripts.push(
    `echo ">>>>> ../npm link ${packageNames.join(' ')}" && cd .. && npm link ${packageNames.join(' ')}`
  );
}

//--------------------------------------------------------------------------------------------------------------------

const alias = {
  '#comp': path.resolve(__dirname, 'src/component'),
  '#ccomp': path.resolve(__dirname, 'src/component/Common'),
};
if (!isLibProduction) {
  alias['@pdg/react-form'] = path.resolve(__dirname, '../src');
}

//--------------------------------------------------------------------------------------------------------------------

const options = {
  mode,
  devtool,
  target: 'web',
  entry: './src',
  stats: false,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias,
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunks/[name].[chunkhash].js',
  },
  devServer: {
    host: 'localhost',
    port: '9805',
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: { errors: false, warnings: false },
      progress: false,
    },
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
              name: 'vendors/common-',
              chunks: 'all',
            },
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                return `vendors/${packageName.replace('@', '')}`;
              },
            },
          },
        }
      : {},
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new WebpackShellPluginNext({
      dev: !isProduction,
      onBuildStart: {
        scripts: preBuildScripts,
        blocking: true,
      },
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'dist'),
        path.resolve(__dirname, 'public'),
      ],
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './public/robots.txt', to: outputPath }],
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    ...(isProduction
      ? [
          new CleanWebpackPlugin.CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['*'],
          }),
          // new BundleAnalyzerPlugin(),
        ]
      : [
          new FriendlyErrorsWebpackPlugin({
            clearConsole: true,
          }),
          new webpack.HotModuleReplacementPlugin(),
          new ReactRefreshWebpackPlugin({ overlay: false }),
        ]),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, 'src'), !isLibProduction && path.resolve(__dirname, '../src')].filter(
          Boolean
        ),
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        enforce: 'pre',
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
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: 'url-loader?limit=100000&name=[name].[ext]',
      },
    ],
  },
};

module.exports = options;
