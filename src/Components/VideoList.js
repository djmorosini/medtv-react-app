import React, { Fragment } from 'react';
import {
    Card, CardImg, CardText, CardBody, Pagination, PaginationItem,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom'

class VideoList extends React.Component {
    constructor(props) {
        super(props)
        this.updaterFunction = props.updater;
    }

    render() {
        const videos = this.props.videos

        if (this.props.fetchedVideo) {
            let fetchedVideos = this.props.fetchedVideo
            const theList = fetchedVideos.slice(0, 9).map((video) => {
                return (

                    <Card width={400} className='col-lg-3 col-md-5 col-sm-12'
                        tag="div"
                        key={video.id}
                    >
                        <Link to={`/video/${video.id}`} params={{ id: video.id }} onClick={() => this.updaterFunction(video)}>
                            <CardImg width="100%" src={video.vid_thumbnail_uri} alt="Video thumbnail"
                                height={200}
                            />
                        </Link>
                        <CardBody>
                            <Link to={`/video/${video.id}`} params={{ id: video.id }} onClick={() => this.updaterFunction(video)}>
                                <CardTitle>{video.title}</CardTitle>
                            </Link>
                            <CardText>{video.description}</CardText>
                        </CardBody>
                    </Card>
                );
            });
            if (theList.length !== 0) {
                return (

                    <Fragment>
                        <div id='the-list' className='d-flex flex-wrap align-content-start col-lg-11 col-md-11 col-sm-11'>
                            {theList}
                        </div>
                        <div className='d-flex justify-content-center'>
                            <ChangePage />
                        </div>
                    </Fragment>
                )
            } else {
                return (
                    <div className='loading-div no-list'>No videos</div>
                )
            }
        } else if (!videos) {
            return (
                <div className='loading-div'>Loading...</div>
            )
        } else {

            const theList = videos.slice(0, 9).map((video) => {
                return (

                    <Card width={400} className='col-lg-3 col-md-5 col-sm-12'
                        tag="div"
                        key={video.id}
                    >
                        <Link to={`/video/${video.id}`} params={{ id: video.id }} onClick={() => this.updaterFunction(video)}>
                            <CardImg width="100%" src={video.vid_thumbnail_uri} alt="Video thumbnail"
                                height={200}
                            />
                        </Link>
                        <CardBody>
                            <Link to={`/video/${video.id}`} params={{ id: video.id }} onClick={() => this.updaterFunction(video)}>
                                <CardTitle>{video.title}</CardTitle>
                            </Link>
                            <CardText>{video.description}</CardText>
                        </CardBody>
                    </Card>
                );
            });

            return (
                <Fragment>
                    <div id='the-list' className='d-flex flex-wrap align-content-start col-lg-11 col-md-11 col-sm-11'>
                        {theList}
                    </div>
                    <div className='d-flex justify-content-center'>
                        <ChangePage />
                    </div>
                </Fragment>
            )
        }
    }
}

class ChangePage extends React.Component {
    render() {
        return (
            <Pagination>
                <PaginationItem className='page-nation'>
                    <Link className='page-item' to={`/videos?startkey=`}>
                        1
          </Link>
                </PaginationItem>
                <PaginationItem className='page-nation'>
                    <Link className='page-item' to={`/videos?startkey=937ee770-a57e-11e8-8faf-f971d5f69c22`}>
                        2
          </Link>
                </PaginationItem>
                <PaginationItem className='page-nation'>
                    <Link className='page-item' to={`/videos?startkey=5eb0cf10-a581-11e8-9de9-8597fe4e71dd`}>
                        3
          </Link>
                </PaginationItem>
            </Pagination>
        );
    }
}

export default VideoList;