import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import VideoDetails from './VideoDetails';
import BigPlayButton from '../node_modules/video-react/lib/components/BigPlayButton';
import {withRouter} from 'react-router-dom';

class VideoPlayer extends Component {
	constructor(props) {
		super(props);
		this.routeParam = props.match.params.id;
		this.state = {
			error: null,
			isLoaded: false,
			video: []
		};
	}

	componentDidMount() {
		console.log(this.routeParam)
		fetch(`https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos/${this.routeParam}`)
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
		let video = this.state.video;
		let videoLink = video.vid_uri
		if (!video || !videoLink) {
			return <div>Loading...</div>;
		} else {
			return (
				<div id= "detailWrapper" className= "d-flex flex-wrap">
					<div className="col-lg-8 col-sm-8">
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