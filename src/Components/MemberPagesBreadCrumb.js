import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const MemberPagesBreadCrumb = (props) => {
    return (
      <div className='team-breadcrumb'>
      <Breadcrumb className='bread-bg'>
        <BreadcrumbItem className='home-breadcrumb'><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem className='home-breadcrumb'><Link to="/meet-our-team">Team Page</Link></BreadcrumbItem>
        <BreadcrumbItem active>Member Details</BreadcrumbItem>
      </Breadcrumb>
      </div>
    );
  };

export default MemberPagesBreadCrumb;