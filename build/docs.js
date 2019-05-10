import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig from '.';
import merge from 'webpack-merge';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default merge(baseConfig, {
  entry: './public/index.js',
  output: {
    path: resolve(__dirname, '../docs'),
    filename: './assets/bundle.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: resolve(__dirname, '../public/assets/favicon.ico'),
      template: resolve(__dirname, '../public/index.ejs')
    }),
    new CopyWebpackPlugin([
      { from: './node_modules/tinymce/skins', to: './assets/skins' }
    ])
  ]
});
