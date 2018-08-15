import React, { Component, Fragment } from 'react';
import TheNavbar from './TheNavbar';
import TheCarousel from './TheCarousel';
import TheFooter from './TheFooter';

class Homepage extends Component {

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <TheCarousel />
        <TheFooter />
      </Fragment>
    );
  }
}

export default Homepage;
