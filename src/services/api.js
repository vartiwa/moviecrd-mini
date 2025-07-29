const API_KEY = "555f75386b25196965cc81153e84ba1c";
const BASE_URL = "https://api.themoviedb.org/3";

// Temporary mock data for development
const MOCK_MOVIES = [
  {
    id: 1,
    title: "Inception",
    release_date: "2010-07-16",
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
  },
  {
    id: 2,
    title: "Interstellar",
    release_date: "2014-11-07",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    release_date: "2008-07-18",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  }
];

export const getPopularMovies = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;  
}