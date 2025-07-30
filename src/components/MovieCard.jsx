import React from 'react';
import '../styles/MovieCard.css';
import { useMovieContext } from '../contexts/movieContext';

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  const favoriteButtonClass = `favorite-button ${favorite ? 'is-favorite' : ''}`;
  const favoriteButtonLabel = favorite ? 'Remove from favorites' : 'Add to favorites';

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <button 
          className={favoriteButtonClass}
          onClick={handleFavoriteClick}
          aria-label={favoriteButtonLabel}
        >
          ❤️
        </button>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
