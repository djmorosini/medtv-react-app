import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const VideoWatchBreadCrumb = (props) => {
    return (
      <div>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/videos">Video List</Link></BreadcrumbItem>
        <BreadcrumbItem active>Watch Video</BreadcrumbItem>
      </Breadcrumb>
      </div>
    );
  };

export default VideoWatchBreadCrumb;