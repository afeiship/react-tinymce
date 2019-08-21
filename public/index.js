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

  _dyChange = (e) => {
    this.setState({ value: Math.random() + 'sss' });
  };

  render() {
    return (
      <div className="app-container">
        <button onClick={this._dyChange}>DynamicChangeContent</button>
        <textarea name="org" id="" cols="30" rows="10">
          I am org textarea
        </textarea>
        <ReactTinymce
          ref={(root) => {
            window.ss = root;
          }}
          value={this.state.value}
          onChange={this._onChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
