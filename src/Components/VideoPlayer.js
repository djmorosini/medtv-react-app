import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import VideoDetails from './VideoDetails';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import { withRouter } from 'react-router-dom';
import VrPlayer from 'react-vr-player';

class VideoPlayer extends Component {
	// constructor(props) {
	// 	super(props);
	// 	// this.routeParam = props.match.params.id;
	// 	this.state = {
	// 		error: null,
	// 		isLoaded: false,
	// 		video: [],
	// 		videoID: props.match.params.id
	// 	};
	// }

	// changeState() {
	// 	this.setState({ videoID: this.props.match.params.id })
	// }

	// componentDidMount() {
	// 	fetch(`https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos/${this.state.videoID}`)
	// 		.then((res) => res.json())
	// 		.then(
	// 			(result) => {
	// 				console.log({ result });
	// 				this.setState({
	// 					isLoaded: true,
	// 					video: result
	// 				});
	// 			},
	// 			(error) => {
	// 				this.setState({
	// 					isLoaded: true,
	// 					error: error
	// 				});
	// 			}
	// 		);
	// }

	render() {
		const video = this.props.video;

		if (!video) {
			return <div className='loading-div'>Loading...</div>;
		} else {
			// if (video.tag != "VR") {
				return (
					<div id="playerWrapper" className="d-flex flex-column flex-wrap">
						<div className="col-lg-9 col-md-10 col-sm-10">
							<Player src={video.vid_uri} key={this.props.match.params.id} fluid={false} width='70%' height={400}>
								<BigPlayButton position='center' />
								<ControlBar autoHide={false} />

							</Player>
						</div>
						<VideoDetails video={video}/>
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