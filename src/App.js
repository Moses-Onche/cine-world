import { React, useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg'
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=27e92d25'

const movie1 = {
  "Title": "Iron Man",
  "Year": "2008",
  "imdbID": "tt0371746",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
}

function App() {

  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Iron man');
  }, [])
  return (
    <div className="app">
      <h1>CineWorld</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value='Superman'
          onChange={() => {}}
        />
        <img 
          src={searchIcon}
          alt='search icon'
          onClick={() => {}}
        />
      </div>

      {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }

      <div className='container'>
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
}

export default App;
