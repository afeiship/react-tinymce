import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from '.';
import merge from 'webpack-merge';

export default merge(baseConfig, {
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    library: 'ReactTinymce',
    libraryTarget: 'umd'
  },
  externals: [
    /tinymce/i,
    {
      react: 'React',
      classnames: 'classnames',
      noop: 'noop',
      'react-dom': 'react-dom',
      'object-assign': 'object-assign',
      'prop-types': 'prop-types'
    }
  ],
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/components/style.scss',
        to: '.'
      }
    ])
  ]
});
