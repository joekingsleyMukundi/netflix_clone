//jshint esversion:6;
import React from "react";
import requests from "../request.js";
import Rows from "../Rows.jsx";
import Banner from "../Banner";
import "./App.css";

const App = (props) => {
  return (
    <div>
      <Banner />
      <Rows
        title="NETFLIX_ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge
      />
      <Rows title="Trending Now" fetchURL={requests.fetchTrending} />
      <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Rows title="Action" fetchURL={requests.fetchActionMovies} />
      <Rows title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Rows title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Rows title="Romantic" fetchURL={requests.fetchRomanticMovies} />
      <Rows title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
};
export default App;
