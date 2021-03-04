import React from 'react'
import './styles/VideoCard.css'

function VideoCard({ movie }) {
    return (
      <div className="videoCard">
        <h1>Hello</h1>
        <img
          src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=6&m=911590226&s=612x612&w=0&h=u6vP2FnJG8Ib3O1xofOUeJ5NtHWrWdRnV-OSL8arBnk="
          alt=""
        />
        <p>Overview</p>
        <h2>Title</h2>
        <p> number of likes</p>
      </div>
    );
}

export default VideoCard
