import React from 'react';
import VideoPlayer from './VideoPlayer';
import TrendingVideos from './TrendingVideos';
import VideoList from './VideoList';


class VideoStore extends React.Component {
    constructor(props) {
        super(props)
        this.route = props
        this.state = {
            videos: [],
            activeVideo: null,
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        let isLoaded = this.state.isLoaded
        console.log(isLoaded)
        if (!isLoaded) {
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
        console.log("UPDATING")
        console.log(video)
        this.setState({ activeVideo: video })
    }

    render() {
        const { videos, isLoaded } = this.state
        let activeVideo = this.state.activeVideo
        let firstVideo = videos[0]

        if (!isLoaded) {
            return <div>Loading...</div>
        } else if (this.route.props.match.path === "/") {
            
            return <TrendingVideos videos={videos} updater={this.updateActiveVideo} />
            

        } else if (this.route.props.match.path === '/videos') {
            return <VideoList videos={videos} updater={this.updateActiveVideo}/>
        } else {
            return (
                <React.Fragment>
                    <VideoPlayer video={activeVideo || firstVideo} />
                    <TrendingVideos videos={videos} updater={this.updateActiveVideo} />
                </React.Fragment>
            )
        }
    }
}

export default VideoStore;

