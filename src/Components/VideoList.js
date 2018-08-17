import React, { Fragment } from 'react';
import {
    Card, CardImg, CardText, CardBody, Pagination, PaginationItem, PaginationLink,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default class VideoList extends React.Component {

    componentDidMount() {
        console.log("I mounted it guys!")
        let videos = this.props.video || []
        if (videos.length === 0) {
            console.log(this.props.video)
            this.setState({ videos: this.props.video, isLoaded: true })
            
        }
    }

    // allVideos = () => {
    //     console.log("Called all videos")
    //     return fetch('https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos')
    //         .then((response) => { return response.json() })
    //         .then((data) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 videos: data
    //             })
    //             return data;
    //         },
    //             error => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error: error
    //                 });
    //             });
    // }

    render() {
        const videos = this.props.video || []
        console.log(videos)

        if (videos.length === 0) {
            return <div>Loading...</div>;
        } else {

            const theList = videos.slice(0,9).map((video) => {
                return (
                    
                    <Card width={400} className='col-lg-3 col-md-5 col-sm-12'
                        tag="div"
                        key={video.id}
                    >
                        <Link to={{pathname:`/video/${video.id}`}} params={{id:video.id}}>
                            <CardImg width="100%" src={video.vid_thumbnail_uri} alt="Video thumbnail"
                                height={200}
                            />
                        </Link>
                        <CardBody>
                            <Link to={{pathname:`/video/${video.id}`}} params={{id:video.id}}>
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