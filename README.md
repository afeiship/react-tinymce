# react-tinymce
> React component for tinymce.

## install
```shell
npm install -S afeiship/react-tinymce
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

## resouces
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api
