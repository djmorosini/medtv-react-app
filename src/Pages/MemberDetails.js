import React, { Component, Fragment } from 'react';
import TheNavbar from '../Components/TheNavbar';
import TheFooter from '../Components/TheFooter';
// import MemberContainer from '../Components/MemberContainer'



class MemberDetails extends Component {

    render() {
  
      return (
        <Fragment>
          <TheNavbar />
          {/* <MemberContainer /> */}
          <TheFooter />
        </Fragment>
      );
    }
  }
  
  export default MemberDetails;