import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import VideoDetails from './VideoDetails';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import { withRouter } from 'react-router-dom';
// import VrPlayer from 'react-vr-player';

class VideoPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			video: null
		};
	}

	componentDidMount() {
		if (this.props.video) {
			if (!(this.props.video.id === this.props.match.params.id)) {
				console.log("Called fetch video 1")
				return fetch(`https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos/${this.props.match.params.id}`)
					.then((response) => { return response.json() })
					.then(
						(result) => {
							localStorage.setItem('activeVideo', `${JSON.stringify(result)}`)
							this.setState({
								video: result
							});
						},
						(error) => {
							this.setState({
								error: error
							});
						}
					);
			}
		} else if (!localStorage.getItem('activeVideo')) {
			console.log("Called fetch video 2")
			return fetch(`https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos/${this.props.match.params.id}`)
				.then((response) => { return response.json() })
				.then(
					(result) => {
						this.setState({
							video: result
						});
					},
					(error) => {
						this.setState({
							error: error
						});
					}
				);
		}
	}

	render() {

		var video = this.state.video

		if (this.props.video) {
			if (this.props.video.id === this.props.match.params.id) {
				video = this.props.video
			}
		} else {
			if (localStorage.getItem('activeVideo')) {
				video = JSON.parse(`${localStorage.getItem('activeVideo')}`);
			}
		}

		if (!video) {
			return <div className='loading-div no-videos'>No video found...</div>;
		} else {
			// if (video.tag != "VR") {
			return (
				<div id="playerWrapper" className="">
					<div className="col-lg-10 col-md-11 col-sm-12">
						<Player src={video.vid_uri} key={this.props.match.params.id} fluid={false} width='70%' height={400}>
							<BigPlayButton position='center' />
							<ControlBar autoHide={false} />

						</Player>
					</div>
					<VideoDetails video={video} />
				</div>
			);
			// } else {
			// 	return (
			// 		<VrPlayer
			// 			sources={videoLink}
			//			brand='React VR Player'
			// 			title={video.title}
			// 			keys={video.id} />

			// 	)
			// }
		}
	}
}

export default withRouter(VideoPlayer);