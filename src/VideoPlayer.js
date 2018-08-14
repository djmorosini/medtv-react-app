import React from 'react';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

export default class VideoPlayer extends React.Component {
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
		if (!this.state.video) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="d-flex flex-wrap col-lg-9 col-sm-9">
					<Player>
						<source src="https://s3.us-east-2.amazonaws.com/medtvvideos/MedTV_vid1.m4v" />
						<ControlBar autoHide={false} />
					</Player>
				</div>
			);
		}
	}
}
