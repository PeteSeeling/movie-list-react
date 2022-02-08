import React from 'react';

export default function MovieForm({
  movieFormDirector,
  setmovieFormDirector,
  movieFormYear,
  setmovieFormYear,
  movieFormTitle,
  setmovieFormTitle,
  movieFormColor,
  setmovieFormColor,
  addMovie
  
}){
  function handleSubmit(e) {
    e.preventDefault();

    const movie = {
      title: movieFormTitle,
      year: movieFormYear,
      director: movieFormDirector,
      color: movieFormColor,
    };
    addMovie(movie);
   
    setmovieFormColor('blue');
    setmovieFormTitle('');
    setmovieFormYear('');
    setmovieFormDirector('');
  }

  return <form onSubmit={handleSubmit}>
    <label>
          Director
      <input required value={movieFormDirector} onChange={e => setmovieFormDirector(e.target.value)} />
    </label>
    <label>
          Movie Title
      <input required value={movieFormTitle} onChange={e => setmovieFormTitle(e.target.value)} />
    </label>
    <label>
          Year Created
      <input required value={movieFormYear} onChange={e => setmovieFormYear(e.target.value)} />
    </label>
    <label>
         Poster Color
      <select value={movieFormColor} onChange={e => setmovieFormColor(e.target.value)}>
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
        <option value='purple'>Purple</option>
        <option value='orange'>Orange</option>
    
      </select>
    </label>
    <button>Add Your Movie</button>
  </form>;
}