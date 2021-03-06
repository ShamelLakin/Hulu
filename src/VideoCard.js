import React from 'react'
import './styles/VideoCard.css'
import Texttruncate from "react-text-truncate";


const base_url = "https://image.tmdb.org/t/p/original/"

function VideoCard({ movie }) {
    return (
      <div className="videoCard">
        
        <img
          src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
          alt="movie poster"
        />
        <Texttruncate
        line={2}
        elemnent="p"
        truncateText="..."
        text={movie.overview}
        />
        <h2>Title</h2>
        <p> number of likes</p>
      </div>
    );
}

export default VideoCard
