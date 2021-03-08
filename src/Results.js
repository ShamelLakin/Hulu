// import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/Results.css";
import VideoCard from "./VideoCard";
import axios from "./api/axios";
// import requests from "./api/requests"

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // run this code once when the Results component loads
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, []);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
}

export default Results;
