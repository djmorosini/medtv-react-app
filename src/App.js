import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import TheNavbar from './TheNavbar';
import Sidebar from './Sidebar';
import TheCarousel from './TheCarousel';
import './App.css';
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
