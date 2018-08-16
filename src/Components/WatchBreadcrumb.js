import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const VideoWatchBreadcrumb = (props) => {
    return (
      <div className='watch-breadcrumb'>
      <Breadcrumb className='bread-bg'>
        <BreadcrumbItem className='home-breadcrumb'><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem className='home-breadcrumb'><Link to="/videos">Video List</Link></BreadcrumbItem>
        <BreadcrumbItem active>Watch Video</BreadcrumbItem>
      </Breadcrumb>
      </div>
    );
  };

export default VideoWatchBreadcrumb;