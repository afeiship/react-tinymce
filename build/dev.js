import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig from '.';
import merge from 'webpack-merge';


export default merge(baseConfig, {
  entry: './public/index.js',
  output: {
    filename: './assets/bundle.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: resolve(__dirname, '../public/assets/favicon.ico'),
      template: resolve(__dirname, '../public/index.ejs')
    })
  ]
});
