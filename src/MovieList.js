import React from 'react';

import MovieItem from './MovieItem';

export default function MoviesList({ movies, deleteMovie }) {
  return <div className='movies-list'>
    {
      movies.map((movie, i) => <MovieItem
        deleteMovie={deleteMovie} 
        key={`${movie.title}-${i}`} {...movies} />)
    }
  </div>;
}