import React, { Component, Fragment } from 'react';
import TheNavbar from './TheNavbar';
import TheCarousel from './TheCarousel';
import './App.css';
import TrendingVideos from './TrendingVideos';
import Sidebar from './Sidebar'
import TheFooter from './TheFooter';

class App extends Component {

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <Sidebar />
        <TheFooter />
      </Fragment>
    );
  }
}

export default App;
