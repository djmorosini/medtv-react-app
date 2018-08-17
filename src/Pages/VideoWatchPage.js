import React, { Component, Fragment } from 'react';
import VideoPlayer from '../Components/VideoPlayer';
import TheNavbar from '../Components/TheNavbar';
import TrendingVideos from '../Components/TrendingVideos';
import TheFooter from '../Components/TheFooter';
import VideoWatchBreadcrumb from '../Components/WatchBreadcrumb';
import {withRouter} from 'react-router-dom';

class VideoWatchPage extends Component {

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <VideoWatchBreadcrumb />
        <VideoPlayer />
        <TrendingVideos />
        <TheFooter />
      </Fragment>
    );
  }
}

export default withRouter(VideoWatchPage);
