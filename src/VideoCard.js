import React from 'react'
import './styles/VideoCard.css'

function VideoCard({ movie }) {
    return (
      <div className="videoCard">
        {/* <h1>Hello</h1> */}
        <img
          src="https://techcrunch.com/wp-content/uploads/2016/11/hulu-shows-movies.jpg"
          alt=""
        />
        <p>Overview</p>
        <h2>Title</h2>
        <p> number of likes</p>
      </div>
    );
}

export default VideoCard
