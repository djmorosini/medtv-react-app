import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

const cards = [
    {
        id: 1,
        title: 'Surgi-Sim v3',
        thumbnail: "https://img.youtube.com/vi/Zd39HhAUFl0/0.jpg",
        description: "Example of using VR for knee surgery training."
    },
    {
        id: 2,
        title: 'VARISEscope',
        thumbnail: "https://img.youtube.com/vi/K0D_gOCB79s/0.jpg",
        description: "New surgical scope tool in use."
    },
    {
        id: 3,
        title: 'VARISESHIP2',
        thumbnail: "https://img.youtube.com/vi/sd0l_asNfkg/0.jpg",
        description: "Hip Surgery."
    },
    {
        id: 4,
        title: 'Card title 4',
        thumbnail: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        id: 5,
        title: 'Card title 5',
        thumbnail: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        id: 6,
        title: 'Card title 6',
        thumbnail: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        id: 7,
        title: 'Card title 7',
        thumbnail: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        id: 8,
        title: 'Card title 8',
        thumbnail: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        id: 9,
        title: 'Card title 9',
        thumbnail: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
];

export default class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] }
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
        return fetch('https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos/list-test')
            .then((response) => { return response.json() })
            .then((data) => {
                this.setState({ videos: data })
                return data;
            });
    }

    render() {
        let videos = this.state.videos;

        const theList = videos.map((video) => {
            return (
                <Card className='h-100 col-lg-4 col-md-6 col-sm-8'
                    tag="div"
                    key={video.id}
                >
                    <CardBody>
                        <CardTitle>{video.title}</CardTitle>
                    </CardBody>
                    <CardImg width="100%" src='https://www.placecage.com/c/300/200' alt="Video thumbnail" />
                    <CardBody>
                        <CardText>{video.description}</CardText>
                    </CardBody>
                </Card>
            );
        });

        return (
            <div id='the-list' className='d-flex flex-wrap col-lg-9 col-sm-9'>
                {theList}
            </div>
        )
    }
}