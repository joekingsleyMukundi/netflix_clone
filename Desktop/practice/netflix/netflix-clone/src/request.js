const requests = {
  fetchTrending: `/trending/all/day?api_key=8fb0cad6aca8f9a6863d438ecc370cc3`,
  fetchNetflixOriginals: `/discover/tv?api_key=8fb0cad6aca8f9a6863d438ecc370cc3&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=8fb0cad6aca8f9a6863d438ecc370cc3`,
  fetchActionMovies: `/discover/movie?api_key=8fb0cad6aca8f9a6863d438ecc370cc3&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=8fb0cad6aca8f9a6863d438ecc370cc3&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=8fb0cad6aca8f9a6863d438ecc370cc3&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=8fb0cad6aca8f9a6863d438ecc370cc3&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=8fb0cad6aca8f9a6863d438ecc370cc3&with_genres=99`,
};

export default requests;
