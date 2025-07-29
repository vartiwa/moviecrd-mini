import React from 'react';
import '../styles/MovieCard.css';
import '../styles/MovieCard.css';

function MovieCard ({ movie }) {

  function onFavoriteClick() {
    alert("clicked")
  }
  return <div className='movie-card'>
    <div className='movie-poster' style={{position: 'relative'}}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <button className='favorite-button' onClick={onFavoriteClick} style={{position: 'absolute', top: '10px', right: '10px', zIndex: 2}}>
          ❤️
        </button>
    </div>
    <div className='movie-info'>
      <h3>{movie.title}</h3>
      <p>{movie.release_date?.split("-")[0]}</p>
    </div>

  </div>
  
}

export default MovieCard;
