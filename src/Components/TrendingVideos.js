import React, { Fragment } from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardDeck,
    CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default class TrendingVideos extends React.Component {

    componentDidMount() {
        let videos = this.props.video || []
        if (videos.length === 0) {
            console.log(this.props.video)
            this.setState({ videos: this.props.video, isLoaded: true })
            
        }
    }

    render() {
        const videos = this.props.video || []

        if (videos.length === 0) {
            return <div>Loading...</div>;
        } else {



            const theList = videos.slice(3, 6).map((video) => {
                return (
                    <Card className='h-100 col-lg-4 col-md-6 col-sm-8'
                        tag="div"
                        key={video.id}
                    >
                        <Link onClick='location.reload();' to={`/video/${video.id}`} params={{ id: video.id }}><CardImg top width="100%" height={200} src={video.vid_thumbnail_uri} alt="Video thumbnail" /></Link>
                        <CardBody>
                            <Link onClick='location.reload();' to={`/video/${video.id}`} params={{ id: video.id }}><CardTitle>{video.title}</CardTitle></Link>
                            <CardText>{video.description}</CardText>
                        </CardBody>
                    </Card>
                );
            });

            return (
                <Fragment>
                    <h1 className='trendTitle'>Trending Videos</h1>
                    <div className='trendVid d-flex flex-wrap col-lg-12 col-sm-12'>
                        <CardDeck>
                            {theList}
                        </CardDeck>
                    </div>
                </Fragment>
            )
        }
    }
}