import React from 'react';
import {

} from 'reactstrap';
import Skull from '../images/skull-309032.svg'

export default class Sorry404 extends React.Component {
    render() {
        return (
            <div width='100%' className='m-5 d-flex flex-column align-items-center'>
                <h1 className='m-5'>Sorry 404</h1>
                <img alt='Surgery Skull' src={Skull} height={650} />
            </div>
        )
    }
}