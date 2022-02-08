
import './App.css';
import { useState, useEffect } from 'react';

import MovieItem from './MovieItem';
import MoviesList from './MovieList';
import MovieForm from './MovieForm';


function App() {

  
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);


  const [movieFormDirector, setmovieFormDirector] = useState('');
  const [movieFormYear, setmovieFormYear] = useState('');
  const [movieFormTitle, setmovieFormTitle] = useState('');
  const [movieFormColor, setmovieFormColor] = useState('');



  useEffect(() =>{
  
    const filteredMovies = movies.filter(movie => movie.title.includes(filter));
 
    setFilteredMovies(filteredMovies);
  },
  [filter, movies]);

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
          setmovieFormYear={setmovieFormYear}
          movieFormTitle={movieFormTitle}
          setmovieFormTitle={setmovieFormTitle}
          movieFormColor={movieFormColor}
          setmovieFormColor={setmovieFormColor}
          addMovie={addMovie}
    
        />
        {
            
          movieFormTitle && <MovieItem 
            title={movieFormTitle}
            year={movieFormYear}
            director={movieFormDirector}
            color={movieFormColor}
            
          />
        }
      </div>
      <div>Filtered Movies</div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <MoviesList movies={
        filteredMovies.length
          ? filteredMovies
          : movies
      }
      
      deleteMovie={deleteMovie}
      />

 
    </div>
  );
}

export default App;
