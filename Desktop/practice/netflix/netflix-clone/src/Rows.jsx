//jshint esversion:6
import React, { useState, useEffect } from "react";
import requests from "./request";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Rows(props) {
  const [movies, setMovies] = useState([]);
  //for trailer url
  const [trailerURL, setTrailerURL] = useState(false);
  // now to fetch the pesific informar=tion when a certain row loads

  useEffect(() => {
    //if [arry is empty ]it meansthart it is going to load once the row is loaded and it wount load again even if the state changes  and our state here is movies but if it has [movies] inside it is going to change once the movie state changes
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      const movieList = request.data.results;
      // console.log(request.data.results);
      setMovies(movieList);
      return requests;
    }
    fetchData();
  }, [props.fetchURL]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https: //developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerURL === true) {
      setTrailerURL(false);
    } else {
      setTrailerURL(true);
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${props.isLarge && "row_poster_large"}`}
              src={`${baseUrl}${
                props.isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}
export default Rows;
