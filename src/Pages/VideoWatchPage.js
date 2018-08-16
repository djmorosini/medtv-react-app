import React, { Component, Fragment } from 'react';
import VideoPlayer from '../Components/VideoPlayer';
import TheNavbar from '../Components/TheNavbar';
import TrendingVideos from '../Components/TrendingVideos';
import TheFooter from '../Components/TheFooter';

class VideoWatchPage extends Component {

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <VideoPlayer />
        <TrendingVideos />
        <TheFooter />
      </Fragment>
    );
  }
}

export default VideoWatchPage;
