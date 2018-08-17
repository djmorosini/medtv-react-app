import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import Sidebar from '../Components/Sidebar'
import TheFooter from '../Components/TheFooter';
import VideoList from '../Components/VideoList';

class FullListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      videos: []
    };
  }

  componentDidMount() {

    const {videos} = this.state;

    console.log('FullListPage Mount: ' + videos.length)
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

  render() {
    const { error, videos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <Fragment>
          <TheNavbar />
          <Sidebar />
          <VideoList video={videos}/>
          <TheFooter />
        </Fragment>
      );
    }
  }
}

export default FullListPage;
