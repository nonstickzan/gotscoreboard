import React from 'react';
import ReactDOM from 'react-dom';

import HouseDisplay from './components/HouseDisplay';
import Footer from './components/Footer';
import Track from './components/Track';
import './index.css';


class App extends React.Component {

  render() {
    return (
      <div class="container">
        <div class="level throne-track">
          <div class="level-item level-left">
            <img src="throne.png" alt="throne" height="48" width="48" class="track-icons"></img>
          </div>
          <div class="level-item level-right">
          <Track />
          </div>
        </div>
        <div class="level sword-track">
          <div class="level-item level-left">
            <img src="sword.png" alt="sword" height="48" width="48" class="track-icons"></img>
          </div>
        <div class="level-item level-right">
        <Track />
        </div>
        </div>
        <div class="level raven-track">
          <div class="level-item level-left">
            <img src="raven.png" alt="raven" height="48" width="48" class="track-icons"></img>
          </div>
        <div class="level-item level-right">
        <Track />
        </div>
        </div>
        <HouseDisplay />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));