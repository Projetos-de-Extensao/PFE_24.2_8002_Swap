import React from 'react';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import './Feed.css';

function Feed() {
  return (
    <div className="app-container">
      <Sidebar />
      <ContentArea />
    </div>
  );
}

export default Feed;
