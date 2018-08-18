import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import TheFooter from '../Components/TheFooter';
import VideoWatchBreadcrumb from '../Components/WatchBreadcrumb';
import VideoStore from '../Components/VideoStore';

class VideoWatchPage extends Component {

  render() {
      return (
        <Fragment>
          <TheNavbar />
          <VideoWatchBreadcrumb />
          <VideoStore props={this.props} />
          <TheFooter />
        </Fragment>
      );
    
  }
}

export default VideoWatchPage;
