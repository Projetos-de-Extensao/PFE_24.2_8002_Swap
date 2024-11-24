import React from 'react';
import Sidebar from './Sidebar';
import ContentVideo from './ContentVideo';

function VideoVisualizer() {
    return (
      <div className="app-container">
        <Sidebar />
        <ContentVideo />
      </div>
    );
}

export default VideoVisualizer;