import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import VideoDetails from './VideoDetails';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import { withRouter } from 'react-router-dom';

class VideoPlayer extends Component {
	constructor(props) {
		super(props);
		// this.routeParam = props.match.params.id;
		this.state = {
			error: null,
			isLoaded: false,
			video: [],
			videoID: props.match.params.id
		};
	}

	changeState() {
		this.setState({videoID: this.props.match.params.id})
	}

	componentDidMount() {
		fetch(`https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos/${this.state.videoID}`)
			.then((res) => res.json())
			.then(
				(result) => {
					console.log({ result });
					this.setState({
						isLoaded: true,
						video: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error: error
					});
				}
			);
	}

	render() {

		// if (this.routeParam != this.props.match.params.id) {
		// 	this.changeState()
		// }

		const {video} = this.state;

		let videoLink = video.vid_uri
		if (!video || !videoLink) {
			return <div className='loading-div'>Loading...</div>;
		} else {
			console.log("Props: "+this.props.match.params.id)
			console.log("State: "+video.id)
			return (
				<div id="playerWrapper" className="d-flex flex-column flex-wrap">
					<div id={this.props.match.params.id} className="col-lg-9 col-md-10 col-sm-10">
						<Player fluid={false} width='100%' height={400}>
							<source src={videoLink} />
							<BigPlayButton position='center' />
							<ControlBar autoHide={false} />

						</Player>
					</div>
					<VideoDetails />
				</div>
			);
		}
	}
}

export default withRouter(VideoPlayer);