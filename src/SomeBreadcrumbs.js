import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const VideoListBreadCrumb = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Video List</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default VideoListBreadCrumb

const VideoWatchBreadCrumb = (props) => {
    return (
      <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/videos">Video List</a></BreadcrumbItem>
        <BreadcrumbItem active>Watch Video</BreadcrumbItem>
      </Breadcrumb>
      </div>
    );
  };

export default VideoWatchBreadCrumb;