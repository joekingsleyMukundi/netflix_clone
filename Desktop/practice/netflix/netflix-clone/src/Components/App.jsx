//jshint esversion:6;
import React from "react";
import requests from "../request.js";
import Rows from "../Rows.jsx";
import Banner from "../Banner";
import Nav from "../Nav";
import "./App.css";

const App = (props) => {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Rows
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge
      />
      <Rows title="Trending Now" fetchURL={requests.fetchTrending} />
      <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Rows title="Romantic Movies" fetchURL={requests.fetchRomanticMovies} />
      <Rows
        title="Documentaries Movies"
        fetchURL={requests.fetchDocumentaries}
      />
    </div>
  );
};
export default App;
