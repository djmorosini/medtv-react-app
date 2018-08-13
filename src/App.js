import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import VideoDetails from './VideoDetails';
import TheNavbar from './TheNavbar';
import TheCarousel from './TheCarousel';
import './App.css';
import TrendingVideos from './TrendingVideos';
import TheFooter from './TheFooter';

class App extends Component {

  render() {

    return (
      <Fragment>
        <VideoPlayer />
        {/* <TheNavbar />
        <TheCarousel />
        <TrendingVideos />
        <TheFooter /> */}
      </Fragment>
    );
  }
}

export default App;
