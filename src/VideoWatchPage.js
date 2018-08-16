import React, { Component, Fragment } from 'react';
import VideoPlayer from './VideoPlayer';
import TheNavbar from './TheNavbar';
import TrendingVideos from './TrendingVideos';
import TheFooter from './TheFooter';

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
