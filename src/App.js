import React, { Component, Fragment } from 'react';
import TheNavbar from './TheNavbar';
import TheCarousel from './TheCarousel';
import './App.css';
import TrendingVideos from './TrendingVideos';

class App extends Component {

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <TheCarousel />
        <TrendingVideos />
      </Fragment>
    );
  }
}

export default App;
