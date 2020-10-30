//jshint esversion:6
import React, { useState, useEffect } from "react";
import requests from "./request";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Rows(props) {
  const [movies, setMovies] = useState([]);
  // now to fetch the pesific informar=tion when a certain row loads

  useEffect(() => {
    //if [arry is empty ]it meansthart it is going to load once the row is loaded and it wount load again even if the state changes  and our state here is movies but if it has [movies] inside it is going to change once the movie state changes
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      const movieList = request.data.results;
      // console.log(request.data.results);
      setMovies(movieList);
      return request;
    }
    fetchData();
  }, [props.fetchURL]);

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${props.isLarge && "row_poster_large"}`}
              src={`${baseUrl}${
                props.isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Rows;
