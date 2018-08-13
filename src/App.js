import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import VideoDetails from './VideoDetails';
import TheNavbar from './TheNavbar';
import Sidebar from './Sidebar';
import TheCarousel from './TheCarousel';
import './App.css';

class App extends Component {

  render() {

    return (
      <Fragment>
        <VideoDetails />
      </Fragment>
    );
  }
}

export default App;
