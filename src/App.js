import React, { Component, Fragment } from 'react';
import TheNavbar from './TheNavbar';
import TheCarousel from './TheCarousel';
import './App.css';

class App extends Component {

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <TheCarousel />
      </Fragment>
    );
  }
}

export default App;
