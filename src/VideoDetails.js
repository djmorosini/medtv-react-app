import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

export default class VideoDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			video: null
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
					<Card className="h-100 col-lg-4 col-md-6 col-sm-8" tag="div" key={video.id}>
						<CardBody>
							<CardTitle>{video.title}</CardTitle>
						</CardBody>
						<CardBody>
							<CardText>{video.description}</CardText>
							<CardText>{video.author}</CardText>
							<CardText>{video.patient.gender}</CardText>
                            <CardText>{video.patient.age}</CardText>
                            <CardText>{video.vid_location.title}</CardText>
                            <CardText>{video.vid_location.country}</CardText>
							<CardText>{video.device}</CardText>
							<CardText>{video.duration}</CardText>
							<CardText>{video.tags}</CardText>
						</CardBody>
					</Card>
				</div>
			);
		}
	}
}
