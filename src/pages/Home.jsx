import MovieCard from "../components/MovieCard";
import { useState,useEffect } from "react";
import { searchMovies,getPopularMovies } from "../services/api";
import '../styles/Home.css';


function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    const GENRES = [
      { name: 'Kids', id: 10751 },
      { name: 'Comedy', id: 35 },
      { name: 'Action', id: 28 }
    ];

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        } catch (err) {
            console.log(err);
            setError("Failed to fetch popular movies");
        }
        finally {
            setLoading(false);
        }
    }
    loadPopularMovies();
    }, []);



    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) 
            return
        if(loading)return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
        } catch (error) {
            console.error("Error fetching search results:", error);
        } finally {
            setLoading(false);
        }

        setSearchQuery("");
    }

    const fetchByGenre = async (genreId) => {
      setLoading(true);
      try {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=555f75386b25196965cc81153e84ba1c&with_genres=${genreId}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError('Failed to fetch genre movies');
      } finally {
        setLoading(false);
      }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input"
                value = {searchQuery} onChange={(e) => setSearchQuery(e.target.value) }/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="genre-buttons">
              {GENRES.map(genre => (
                <button
                  key={genre.id}
                  className="search-button"
                  onClick={() => fetchByGenre(genre.id)}
                >
                  {genre.name}
                </button>
              ))}
            </div>
            {loading ?(
                <div className="loading">Loading...</div>
           
            ) : (
                <div className="movies-grid">
                    {movies.filter(movie => movie.poster_path).map(movie =>  (  
                       <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;