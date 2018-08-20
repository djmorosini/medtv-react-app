import React from 'react';
import { Link } from 'react-router-dom'

//so that I don't have to write it at the bottom
export default class TheFooter extends React.Component {

    render() {
        return (
            <div width='100%' className="py-5 footer">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; MedTV 2018</p>
                </div>
            </div>
        )
    }
}