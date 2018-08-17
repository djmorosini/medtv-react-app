import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import TheCarousel from '../Components/TheCarousel';
import TheFooter from '../Components/TheFooter';
import TrendingVideos from '../Components/TrendingVideos';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      videos: []
    };
  }

  componentDidMount() {
    console.log("I mounted it guys!")

    let videos = this.state.videos;

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
    const { error, isLoaded, videos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
        <Fragment>
          <TheNavbar />
          <TheCarousel />
          <TrendingVideos video={videos}/>
          <TheFooter />
        </Fragment>
      );
    }
  }
}

export default Homepage;
