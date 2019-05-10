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
  import ReactTinymce from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: '<p><strong>STONG</strong> CONENT!</p>'
    };

    _onChange = (e) => {
      console.log('e=>', e.target.value);
    };

    render() {
      return (
        <div className="app-container">
          <ReactTinymce value={this.state.value} onChange={this._onChange} />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-tinymce/
