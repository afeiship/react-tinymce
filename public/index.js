import BoilerplateReactComponent from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <BoilerplateReactComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
