import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import TheCarousel from '../Components/TheCarousel';
import TheFooter from '../Components/TheFooter';
import VideoStore from '../Components/VideoStore';

class Homepage extends Component {

  render() {
  

      return (
        <Fragment>
          <TheNavbar />
          <TheCarousel />
          <VideoStore props={this.props}/>
          <TheFooter />
        </Fragment>
      );
    
  }
}

export default Homepage;
