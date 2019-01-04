import React from 'react';
import VideoPlayer from './VideoPlayer';
import TrendingVideos from './TrendingVideos';
import VideoList from './VideoList';


export default class VideoStore extends React.Component {
    constructor(props) {
        super(props)
        this.route = props
        this.state = {
            videos: [],
            fetchedVideo: null,
            activeVideo: null,
            error: null,
            searchParam: null,
            nextPage: null
        }
    }

    componentDidMount() {
        let videos = this.state.videos
        let searchParam = this.state.searchParam
        let propParam = this.props.props.location.search
        if (videos.length === 0 && !localStorage.getItem('videos')) {
            this.allVideos().then((allVideos) => {
                this.setState({ videos: allVideos })
                localStorage.setItem('videos', JSON.stringify(allVideos))
            })
        }
        if ((propParam.includes('?tag') || propParam.includes('?startkey')) && propParam !== searchParam) {
            this.getVideosByTags().then((fetchedVideo) => {
                this.setState({ fetchedVideo: fetchedVideo, searchParam: this.props.props.location.search || '?none' })
                localStorage.setItem('fetchedVideo', JSON.stringify(fetchedVideo))
            })
        }
    }

    componentDidUpdate() {
        let searchParam = this.state.searchParam
        let propParam = this.props.props.location.search
        if (propParam !== searchParam) {
            this.getVideosByTags().then((fetchedVideo) => {
                this.setState({ fetchedVideo: fetchedVideo, searchParam: this.props.props.location.search })
                localStorage.setItem('fetchedVideo', JSON.stringify(fetchedVideo))
            })
        }
        window.scrollTo(0, 0);
    }

    allVideos = () => {
        return fetch('https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos')
            .then((response) => { return response.json() })
            .then((data) => {
                this.setState({
                    videos: data
                })
                return data;
            },
                error => {
                    this.setState({
                        error: error
                    });
                });
    }

    getVideosByTags = () => {
        return fetch(`https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos${this.props.props.location.search}`)
            .then((response) => { return response.json() })
            .then((data) => {
                this.setState({
                    fetchedVideo: data,
                    searchParam: this.props.props.location.search
                })
                return data;
            },
                error => {
                    this.setState({
                        error: error
                    });
                });
    }

    updateActiveVideo = (video) => {
        localStorage.setItem('activeVideo', `${JSON.stringify(video)}`)
        this.setState({ activeVideo: video })
    }

    render() {
        let videos = JSON.parse(localStorage.getItem('videos')) || this.state.videos
        let activeVideo = this.state.activeVideo
        let firstVideo = videos[0]
        let fetchedVideo = this.state.fetchedVideo
        let nextPage = this.state.nextPage

        if (localStorage.getItem('activeVideo')) {
            // localStorage.clear()
            activeVideo = JSON.parse(`${localStorage.getItem('activeVideo')}`)
        }


        if (!videos) {
            return <div>Loading...</div>
        } else if (this.route.props.match.path === "/") {

            return <TrendingVideos videos={videos} updater={this.updateActiveVideo} />


        } else if (this.route.props.match.path === '/videos' && nextPage) {

            return (
                <React.Fragment>

                    <VideoList videos={nextPage} fetchedVideo={null} updater={this.updateActiveVideo} />
                </React.Fragment>
            )
        } else if (this.route.props.match.path === '/videos') {

            return (
                <React.Fragment>

                    <VideoList videos={videos} fetchedVideo={fetchedVideo} updater={this.updateActiveVideo} />
                </React.Fragment>
            )

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