import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import VideoDetails from './VideoDetails';
import BigPlayButton from '../node_modules/video-react/lib/components/BigPlayButton';

export default class VideoPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			video: []
		};
	}

	componentDidMount() {
		fetch('https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos/27620c20-9cb9-11e8-b2ad-d524ebffd498')
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
		if (!video) {
			return <div>Loading...</div>;
		} else {
			return (
				<div id= "detailWrapper" className= "d-flex flex-wrap">
					<div className="col-lg-8 col-sm-8">
						<Player fluid={false} width={900} height={400}>
							<source src="https://s3.us-east-2.amazonaws.com/medtvvideos/MedTV_vid1.m4v" />
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
