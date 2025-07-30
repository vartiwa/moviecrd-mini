import '../styles/Favorites.css';
import { useMovieContext } from '../contexts/movieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className="favorites">
            <h1>Your Favorite Movies</h1>
            {favorites.length === 0 ? (
                <div className="favorites-empty">
                    <p>No favorite movies added yet.</p>
                </div>
            ) : (
                <div className="movies-grid">
                    {favorites.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;
