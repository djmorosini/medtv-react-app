import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import Sorry404 from '../Components/Sorry404';
import TheFooter from '../Components/TheFooter';

class The404Page extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <Sorry404 />
        <TheFooter />
      </Fragment>
    );
  }
}

export default The404Page;
