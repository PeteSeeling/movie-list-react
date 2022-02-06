
import './App.css';
import { useState, useEffect } from 'react';

import MovieItem from './MovieItem';
import MoviesList from './MovieList';
import { MovieForm } from './MovieForm';


function App() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);



  function addMovie(newestMovie) {
    const updatedMoviesList = [...movies, newestMovie];

    setMovies(updatedMoviesList);
  }

  function deleteMovie(title) {
    const index = movies.findIndex(movie => movie.title === title);

    movies.splice(index, 1);
    setFilter('');
    setMovies([...movies]);

  }




  return (
    <div className="App">
      <div className='current-movies-list'>
        <MovieForm
        movieFormDirector={movieFormDirector}
        setmovieFormDirector={setmovieFormDirector}
        movieFormYear={movieFormYear}
        setmovieFormYear={}
        movieFormTitle={}
        setmovieFormTitle={}
        movieFormColor={}
        setmovieFormColor={}
        submitMovie={}
        />
      </div>

 
    </div>
  );
}

export default App;
