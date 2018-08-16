import React, { Component, Fragment } from 'react';
import VideoPlayer from './VideoPlayer';
import logo from './logo.svg';
import TheNavbar from './TheNavbar';
import TheCarousel from './TheCarousel';
import './App.css';
import TrendingVideos from './TrendingVideos';
import Sidebar from './Sidebar'
import TheFooter from './TheFooter';
import Media from './Media';

class MeetOurTeam extends Component {

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <Media />
        <TheFooter />
      </Fragment>
    );
  }
}

export default MeetOurTeam;
