import React, { Fragment } from 'react';
import {
    Card,  
    CardImg, 
    CardTitle, 
    CardText, 
    CardDeck, 
    CardBody
} from 'reactstrap';


export default class TrendingVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            videos: []
        };
    }

    componentDidMount() {
        console.log("I mounted it guys!")

        let videos = this.state.videos;

        if (videos.length === 0) {
            console.log("Im fetching!")
            this.allVideos().then((allVideos) => {
                this.setState({ videos: allVideos })
            })
        }
    }

    allVideos = () => {
        console.log("Called all videos")
        return fetch('https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos')
            .then((response) => { return response.json() })
            .then((data) => {
                this.setState({ 
                    isLoaded: true,
                    videos: data
                })
                return data;
            },
                error => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                });
    }

    render() {
        const { error, isLoaded, videos } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

      

            const theList = videos.slice(0,3).map((video) => {
                return (
                    <Card className='h-100 col-lg-4 col-md-6 col-sm-8'
                        tag="div"
                        key={video.id}
                    >    
                        <a href='#'><CardImg top width="100%" height={200} src={video.vid_thumbnail_uri} alt="Video thumbnail" /></a>
                        <CardBody>
                            <a href='#'><CardTitle>{video.title}</CardTitle></a>
                            <CardText>{video.description}</CardText>
                        </CardBody>
                    </Card>  
                );
            });

            return (
                <Fragment>
                <h1 id='trendTitle'>Trending Videos</h1>
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
