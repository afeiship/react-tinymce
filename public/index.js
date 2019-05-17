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
        <textarea name="org" id="" cols="30" rows="10">
        I am org textarea
        </textarea>
        <ReactTinymce value={this.state.value} onChange={this._onChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
