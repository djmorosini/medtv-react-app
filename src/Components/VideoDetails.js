import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import {withRouter} from 'react-router-dom';

class VideoDetails extends React.Component {

	render() {
		let video = this.props.video;
		if (!video) {
			return <div className='loading-div'>Loading...</div>;
		} else {
			return (
				<div className="d-flex flex-wrap col-lg-12 col-sm-12 details-wrapper">
					<Card className="col-lg-12 col-md-12 col-sm-12" tag="div" key={video.id}>
						<CardBody>
							<CardTitle id='vidDetailTitle'><span>{video.title}</span></CardTitle>
							<CardText>{video.description}</CardText>
							<CardText><span className='strong'>Author:</span>  {video.author}</CardText>
							<CardText><span className='strong'>Gender</span>: {video.patient.gender}</CardText>
                            <CardText><span className='strong'>Age</span>: {video.patient.age}</CardText>
                            <CardText><span className='strong'>Location:</span> {video.vid_location.title}</CardText>
                            <CardText><span className='strong'>Country:</span> {video.vid_location.country}</CardText>
							<CardText><span className='strong'>Device:</span> {video.device}</CardText>
							<CardText><span className='strong'>Duration:</span> {video.vid_duration} seconds</CardText>
							{/* <CardText>{video.tags}</CardText> */}
						</CardBody>
					</Card>
				</div>
			);
		}
	}
}

export default withRouter(VideoDetails);