import React, { Fragment } from 'react';
import {
    Card, CardImg, CardText, CardBody, Pagination, PaginationItem, PaginationLink,
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
        console.log(this.props)

        if (this.props.fetchedVideo) {
            const fetchedVideos = this.props.fetchedVideo
            const theList = fetchedVideos.map((video) => {
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
                    <div id='the-list' className='d-flex flex-wrap col-lg-11 col-md-11 col-sm-11'>
                        {theList}
                    </div>
                    <div className='d-flex justify-content-center'>
                        <ChangePage />
                    </div>
                </Fragment>
            )
        }

        if (!videos) {
            return <div className='loading-div no-videos'>No Videos...</div>;
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
                    <div id='the-list' className='d-flex flex-wrap col-lg-11 col-md-11 col-sm-11'>
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
            <Pagination aria-label="Page navigation example">
                <PaginationItem disabled>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink href="#">
                        1
          </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
          </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
          </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        4
          </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        5
          </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        );
    }
}

export default VideoList;