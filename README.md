# react-tinymce
> React component for tinymce.

## install
```shell
npm install -S afeiship/react-tinymce
```

## special for tinymce - webpack
```js
new CopyWebpackPlugin([
  { from: './node_modules/tinymce/plugins', to: './assets/plugins' },
  { from: './node_modules/tinymce/themes', to: './assets/themes' },
  { from: './node_modules/tinymce/skins', to: './assets/skins' }
])
```

## usage
1. import css
  ```scss
  @import "~react-tinymce/style.scss";

  // customize your styles:
  $react-tinymce-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactTinymce from 'react-tinymce';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactTinymce />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-tinymce/
