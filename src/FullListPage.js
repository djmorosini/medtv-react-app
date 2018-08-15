import React, { Component, Fragment } from 'react';
import TheNavbar from './TheNavbar';
import Sidebar from './Sidebar'
import TheFooter from './TheFooter';

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
