import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import TheCarousel from '../Components/TheCarousel';
import TheFooter from '../Components/TheFooter';

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
