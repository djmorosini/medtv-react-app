import React, { Component } from 'react';
import logo from './logo.svg';
import TheNavbar from './TheNavbar';
import TheCarousel from './TheCarousel';
import './App.css';

class App extends Component {

  render() {

    return (
      <div>
      <TheNavbar />
      <TheCarousel />
      </div>
    );
  }
}

export default App;
