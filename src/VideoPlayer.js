import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

export default class VideoPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
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
				<div id="the-list" className="d-flex flex-wrap col-lg-9 col-sm-9">
					<Player>
						<source src="https://s3.us-east-2.amazonaws.com/medtvvideos/CE_Video_1534114276315.mp4" />
						<ControlBar autoHide={false} />
					</Player>
				</div>
			);
		}
	}
}