import React from 'react';

export default function MovieItem({
  title, director, color, deleteMovie, year
}) {
  return <div 
    onClick={() => deleteMovie ? deleteMovie(title) : null}
    className='movie-item' stlye={{ background: color } }>
    <h2>{title}</h2>
    <div>Directed by:{director}</div>
    <div>Made in {year}</div>
       
  </div>;

}