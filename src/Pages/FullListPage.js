import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import Sidebar from '../Components/Sidebar'
import TheFooter from '../Components/TheFooter';
import VideoStore from '../Components/VideoStore';

class FullListPage extends Component {


  render() {

      return (
        <Fragment>
          <TheNavbar />
          <Sidebar />
          <VideoStore props={this.props}/>
          <TheFooter />
        </Fragment>
      );
    
  }
}

export default FullListPage;
