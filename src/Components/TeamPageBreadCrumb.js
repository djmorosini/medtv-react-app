import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const TeamPageBreadCrumb = (props) => {
  return (
    <div>
      <Breadcrumb className='team-breadcrumb'>
        <BreadcrumbItem className='home-breadcrumb'><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem active>Team Page</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default TeamPageBreadCrumb;