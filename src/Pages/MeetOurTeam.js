import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import TheFooter from '../Components/TheFooter';
import Media from '../Components/Media';

class MeetOurTeam extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Fragment>
        <TheNavbar />
        <Media />
        <TheFooter />
      </Fragment>
    );
  }
}

export default MeetOurTeam;
