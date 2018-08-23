import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import TheFooter from '../Components/TheFooter';
import MemberContainer from '../Components/MemberContainer'



class MemberDetails extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

    render() {
  
      return (
        <Fragment>
          <TheNavbar />
          <MemberContainer props={this.props} />
          <TheFooter />
        </Fragment>
      );
    }
  }
  
  export default MemberDetails;