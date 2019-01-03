import React from 'react';
import ReactDOM from 'react-dom';

import HouseDisplay from './components/HouseDisplay';
import './index.css';


class App extends React.Component {

  render() {
    return (
      <div>
      <HouseDisplay />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));