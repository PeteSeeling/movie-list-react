import React from 'react';


export default function MovieItem({
  title, director, color, deleteMovie, year
}) {

  return <div 
    onClick={() => deleteMovie ? deleteMovie(title) : null }
    className='movie-items' stlye={{ backgroundColor: color }}>
    <h2>Movie: {title}</h2>
    <div>Directed by:{director}</div>
    <div>Made in: {year}</div>
       
  </div>;

}