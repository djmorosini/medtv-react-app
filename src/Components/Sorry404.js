import React from 'react';
import {
    Jumbotron
} from 'reactstrap';
import Skull from '../images/skull-309032.svg'
import { Link } from 'react-router-dom'

export default class Sorry404 extends React.Component {
    render() {
        return (
            <div width='100%' className='mt-5 d-flex flex-column align-items-center'>
                <h1 className='mt-5'>Sorry 404</h1>
                <img alt='Surgery Skull' src={Skull} height={400} />
                <Jumbotron>
                    <p>The page you're looking for could not be found. Here are some helpful links to get you back on track:</p>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/videos?startkey=">Videos</Link>
                        </li>
                        <li>
                            <Link to="/meet-our-team">Meet Our Team</Link>
                        </li>
                    </ul>
                </Jumbotron>
            </div>
        )
    }
}