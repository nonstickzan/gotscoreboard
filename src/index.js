import React from 'react';
import ReactDOM from 'react-dom';

import HouseDisplay from './components/HouseDisplay';
import Footer from './components/Footer';
import './index.css';


class App extends React.Component {

  render() {
    return (
      <div>
      <HouseDisplay />
      <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));