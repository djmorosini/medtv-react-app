import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import Sidebar from '../Components/Sidebar'
import TheFooter from '../Components/TheFooter';

class FullListPage extends Component {

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <Sidebar />
        <TheFooter />
      </Fragment>
    );
  }
}

export default FullListPage;
