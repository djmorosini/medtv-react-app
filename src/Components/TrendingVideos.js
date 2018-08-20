import React, { Fragment } from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom'

class TrendingVideos extends React.Component {
    constructor(props) {
        super(props)
        this.updaterFunction = props.updater;
    }

    render() {
        const videos = this.props.videos
        if (!this.props.videos) {
            return <div>Loading...</div>;
        } else {
            const theList = videos.slice(3, 6).map((video) => {
                return (
                    <Card className='trending-card flex-wrap d-flex col-lg-4 col-md-5 col-sm-12'
                        tag="div"
                        key={video.id}
                    >
                        <Link to={`/video/${video.id}`} params={{ id: video.id }} onClick={() => this.updaterFunction(video)}><CardImg top width="100%" height={200} src={video.vid_thumbnail_uri} alt="Video thumbnail" /></Link>
                        <CardBody>
                            <Link to={`/video/${video.id}`} params={{ id: video.id }} onClick={() => this.updaterFunction(video)}><CardTitle>{video.title}</CardTitle></Link>
                            <CardText>{video.description}</CardText>
                        </CardBody>
                    </Card>
                );
            });

            return (
                <Fragment>
                    <h1 className='trendTitle'>Trending Videos</h1>
                    <div className='trendVid d-flex flex-wrap justify-content-around col-lg-12 col-sm-12'>
                        
                            {theList}
                       
                    </div>
                </Fragment>
            )
        }
    }
}

export default TrendingVideos;