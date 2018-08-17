import React, { Component, Fragment } from 'react';
import VideoPlayer from '../Components/VideoPlayer';
import TheNavbar from '../Components/TheNavbar';
import TrendingVideos from '../Components/TrendingVideos';
import TheFooter from '../Components/TheFooter';
import VideoWatchBreadcrumb from '../Components/WatchBreadcrumb';
import { withRouter } from 'react-router-dom';

class VideoWatchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      videos: [],
      activeVideo: null
    };
  }

  componentDidMount() {
    let videos = this.state.videos;

    console.log('Watchpage Mount: ' + videos.length)
    console.log("Videos State: "+videos)

    if (videos.length === 0) {
      console.log("Im fetching!")
      this.allVideos().then((allVideos) => {
        this.setState({ videos: allVideos })
      })
    }
  }

  allVideos = () => {
    console.log("Called all videos")
    return fetch('https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos')
      .then((response) => { return response.json() })
      .then((data) => {
        this.setState({
          isLoaded: true,
          videos: data
        })
        return data;
      },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        });
  }
  updateActiveVideo = (video) => {
    this.setState({ activeVideo: video})
  }

  render() {
    const { error, videos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <Fragment>
          <TheNavbar />
          <VideoWatchBreadcrumb />
          <VideoPlayer video={this.state.activeVideo || this.state.videos[0]} />
          <TrendingVideos videos={videos} updateActiveVideo={this.updateActiveVideo}/>
          <TheFooter />
        </Fragment>
      );
    }
  }
}

export default withRouter(VideoWatchPage);
